import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders'; // Not available with legacy API


const services = defineCollection({
    loader: file("src/data/services.json"),
    schema: ({image}) =>
        z.object({            
            imgSrc: image(),
            alt: z.string(),
            title: z.string(),
            pageRoute: z.string(),
            shortTitle: z.string(),
            heroDescription: z.string(),
            heroImgSrc: image(),
            servicesWhy: z.array(
                z.object({ title: z.string(), description: z.string() })
            ),
            processes: z.array(
            z.object({ order: z.number(), title: z.string(), description: z.string() })
            ),
            description: z.string()
        }),
});

export const collections = { services };