import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders'; // Not available with legacy API


const services = defineCollection({
    loader: file("src/data/services.json"),
    schema: ({image}) =>
        z.object({            
            imgSrc: image(),
            alt: z.string(),
            title: z.string(),
            description: z.string()
        }),
});

export const collections = { services };