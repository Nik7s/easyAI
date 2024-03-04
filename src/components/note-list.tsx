"use client";

import { Note as NoteModel } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";
import AddNoteDialog from "./addNoteDialog";

interface NotesProps {
  note: NoteModel;
}

export default function NoteList({ note }: NotesProps) {
  const [showEditDialog, setShowEditDialog] = useState(false);

  const wasUpdated = note.updatedAt > note.createdAt;
  const createdUpdatedAtTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  return (
    <>
      <Card
        onClick={() => setShowEditDialog(true)}
        className="max-h-[200px] cursor-pointer overflow-scroll transition-shadow hover:shadow-lg"
      >
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>
            {createdUpdatedAtTimestamp}
            {wasUpdated && "(updated)"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{note.content}</p>
        </CardContent>
      </Card>

      <AddNoteDialog
        open={showEditDialog}
        setOpen={setShowEditDialog}
        noteToedit={note}
      />
    </>
  );
}
