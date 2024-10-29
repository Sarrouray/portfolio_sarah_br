import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.number(),
			tags: z.array(z.string()),
			img: z.string(),
			img2: z.string().optional(),
			img3: z.string().optional(),
			img4: z.string().optional(),
			img5: z.string().optional(),
			img6: z.string().optional(),
			img7: z.string().optional(),
			img8: z.string().optional(),
			video:z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
};
