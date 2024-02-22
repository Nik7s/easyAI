import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import prisma from "@/lib/db/prisma";
import NodeList from "@/components/note-list";
import { ArrowUpRight, Rabbit } from "lucide-react";

export const metadata: Metadata = {
  title: "easyAI-nodes",
};

export default async function NotePage() {
  const { userId } = auth();
  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="grid gap-3 sm:grid-cols-2  lg:grid-cols-3">
      {allNotes.map((note) => (
        <NodeList note={note} key={note.id} />
      ))}
      {allNotes.length === 0 && (
        <div className="col-span-full flex h-screen flex-col items-center justify-center gap-6">
          <Rabbit size={200} strokeWidth={0.5} />
          <div className="flex gap-3">
            {"You don't have any notes yet. Try to add One "}
            <ArrowUpRight color="orange" />
          </div>
        </div>
      )}
    </div>
  );
}
