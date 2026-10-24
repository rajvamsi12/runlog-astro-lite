import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.enum(['research', 'projects', 'notes']),
    author: z.string(),
    readingTime: z.number().default(5),
    featured: z.boolean().default(false),
    cover: z.string().nullish(),
  }),
});

export const collections = { blog };
