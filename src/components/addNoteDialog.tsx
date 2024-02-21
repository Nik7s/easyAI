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

interface AddNoteDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddNoteDialog({ open, setOpen }: AddNoteDialogProps) {
  const router = useRouter();
  const form = useForm<CreateNoteSchema>({
    resolver: zodResolver(createNoteSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  async function onSubmit(input: CreateNoteSchema) {
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        body: JSON.stringify(input),
      });

      if (!response.ok) throw Error("Status code: " + response.status);
      form.reset();
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>🗒️ add note</DialogTitle>
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
            <DialogFooter>
              <LoadingButton
                type="submit"
                loading={form.formState.isSubmitting}
              >
                submit
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
