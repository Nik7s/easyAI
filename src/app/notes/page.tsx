import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import prisma from "@/lib/db/prisma";
import NodeList from "@/components/note-list";

export const metadata: Metadata = {
  title: "easyAI-nodes",
};

export default async function NotePage() {
  const { userId } = auth();
  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-3">
      {allNotes.map((note) => (
        <NodeList note={note} key={note.id} />
      ))}
    </div>
  );
}
