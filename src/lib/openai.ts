import OpenAI from "openai";

const apikey = process.env.OPENAI_API_KEY;
if (!apikey) {
  throw Error("OPENIA_API_KEY is not set");
}

const openai = new OpenAI({ apiKey: apikey });

export default openai;

export async function getEmbedding(text: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });

  const embedding = response.data[0].embedding;
  if (!embedding) throw Error("Error generating embedding.");
  console.log(embedding);
  return embedding;
}
