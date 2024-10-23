import { z } from "zod";

export const createPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be at most 100 characters"),
  shortDescription: z
    .string()
    .min(1, "Short description is required")
    .max(300, "Short description must be at most 300 characters"),
  image: z.string().optional(),
  content: z.string().min(1, "Content is required") // WYSIWYG
});

export type CreatePostDto = z.infer<typeof createPostSchema>;
