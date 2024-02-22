import { z } from "zod";
export const createNoteSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().optional(),
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;

//validation for update
export const updateNoteSchema = createNoteSchema.extend({
  id: z.string().min(1),
});

//validation for delete
export const deleteNoteSchema = z.object({
  id: z.string().min(1),
});
