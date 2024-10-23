import { z } from "zod";

export const updatePostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be at most 100 characters")
    .optional(),
  shortDescription: z
    .string()
    .min(1, "Short description is required")
    .max(300, "Short description must be at most 300 characters")
    .optional(),
  image: z.string().optional(),
  content: z.string().min(1, "Content is required").optional()
});

export type UpdatePostDto = z.infer<typeof updatePostSchema>;
