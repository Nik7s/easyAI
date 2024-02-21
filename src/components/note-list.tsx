import { Note as NoteModel } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface NotesProps {
  note: NoteModel;
}

export default function NoteList({ note }: NotesProps) {
  const wasUpdated = note.updatedAt > note.createdAt;
  const createdUpdatedAtTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>{createdUpdatedAtTimestamp}</CardDescription>
      </CardHeader>
      <CardContent>{note.content}</CardContent>
    </Card>
  );
}
