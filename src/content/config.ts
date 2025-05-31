import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  posts,
};
