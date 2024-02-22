"use client";

import { CreateNoteSchema, createNoteSchema } from "@/lib/validation/note";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import LoadingButton from "./ui/Loading-Button";
import { useRouter } from "next/navigation";
import { Note } from "@prisma/client";
import { useState } from "react";
import { Button } from "./ui/button";
import ConfirmDialog from "./confirm-to-delete";
import { DialogDescription } from "@radix-ui/react-dialog";

interface AddNoteDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  noteToedit?: Note;
}

export default function AddNoteDialog({
  open,
  setOpen,
  noteToedit,
}: AddNoteDialogProps) {
  const [deleteProgress, setDeleteprogress] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const router = useRouter();
  const form = useForm<CreateNoteSchema>({
    resolver: zodResolver(createNoteSchema),
    defaultValues: {
      title: noteToedit?.title || "",
      content: noteToedit?.content || "",
    },
  });
  async function onSubmit(input: CreateNoteSchema) {
    try {
      if (noteToedit) {
        const response = await fetch("/api/notes", {
          method: "PUT",
          body: JSON.stringify({
            id: noteToedit.id,
            ...input,
          }),
        });
        if (!response.ok) throw Error("Status code: " + response.status);
      } else {
        const response = await fetch("/api/notes", {
          method: "POST",
          body: JSON.stringify(input),
        });

        if (!response.ok) throw Error("Status code: " + response.status);
        form.reset();
      }

      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again");
    }
  }

  async function deleteNote() {
    if (!noteToedit) return;
    setDeleteprogress(true);
    try {
      const response = await fetch("/api/notes", {
        method: "DELETE",
        body: JSON.stringify({ id: noteToedit.id }),
      });

      if (!response.ok) throw Error("Status code: " + response.status);
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again");
    } finally {
      setDeleteprogress(false);
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {noteToedit ? "📝Edit or ❌delete note " : "🗒️ add note"}
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Note Title 💡</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Note title " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Note Content 📰</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Note content " />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter className="gap-2 sm:gap-0">
                {noteToedit ? (
                  <>
                    <Button
                      variant={"destructive"}
                      type="button"
                      onClick={() => setShowConfirmDialog(true)}
                    >
                      Delete
                    </Button>
                    <LoadingButton
                      type="submit"
                      loading={form.formState.isSubmitting}
                      disabled={deleteProgress}
                    >
                      submit
                    </LoadingButton>
                  </>
                ) : (
                  <LoadingButton
                    type="submit"
                    loading={form.formState.isSubmitting}
                    disabled={deleteProgress}
                  >
                    submit
                  </LoadingButton>
                )}
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <ConfirmDialog open={showConfirmDialog} setOpen={setShowConfirmDialog}>
        <DialogDescription>Note title: {noteToedit?.title}</DialogDescription>
        <LoadingButton
          variant={"destructive"}
          loading={deleteProgress}
          disabled={form.formState.isSubmitting}
          onClick={deleteNote}
          type="button"
        >
          Yes
        </LoadingButton>
        <Button
          variant={"secondary"}
          onClick={() => {
            setOpen(false), setShowConfirmDialog(false);
          }}
        >
          No
        </Button>
      </ConfirmDialog>
    </>
  );
}
