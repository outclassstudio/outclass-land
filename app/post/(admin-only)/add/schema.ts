import { z } from "zod";

export const postSchema = z.object({
  title: z.string(),
  post: z.string(),
  photo: z.string(),
  summary: z.string(),
});
