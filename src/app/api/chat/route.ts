import { notesIndex } from "@/lib/db/pinecone";
import openai, { getEmbedding } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import prisma from "@/lib/db/prisma";
import { match } from "assert";
import { OpenAIStream, StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
    const messageTruncated = messages.slice(-6);

    const embedding = await getEmbedding(
      messageTruncated.map((message) => message.content).join("\n"),
    );

    const { userId } = auth();

    const vectorQueryResponse = await notesIndex.query({
      vector: embedding,
      topK: 4,
      filter: { userId },
    });

    const relevantNotes = await prisma.note.findMany({
      where: {
        id: {
          in: vectorQueryResponse.matches.map((match) => match.id),
        },
      },
    });

    console.log("Relevant notes found:", relevantNotes);

    const systemMessage: ChatCompletionMessage = {
      role: "assistant",
      content:
        "You are an intelligent note-taking app your name is 'easyAI' created by henry dionizi. you answer the user's question based on the existing notes." +
        "idea 'i got working in this project after seeing also taking many note every where they go, at school, vacations, meeting , at work place and other place, But the problem is how to organize them, accessibility, that with easyAi can get answer based on many notes, that is so helpful to me and will to others'" +
        "The relevent notes for this query are: \n" +
        relevantNotes
          .map((note) => `title: ${note.title} \n\nContent: \n${note.content}`)
          .join("\n\n"),
    };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messageTruncated],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
