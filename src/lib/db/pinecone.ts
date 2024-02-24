import { Pinecone } from "@pinecone-database/pinecone";

const apikey = process.env.PINECONE_API_KEY;
if (!apikey) {
  throw Error("PINECONE_API_KEY is not set");
}

const pinecone = new Pinecone({
  apiKey: apikey,
  // environment: "gcp-starter",
});

// const pinecone = new Pinecone({
//   apiKey: "YOUR_API_KEY",
//   environment: "YOUR_ENVIRONMENT",
// });
export const notesIndex = pinecone.Index("easy-note-ai");
