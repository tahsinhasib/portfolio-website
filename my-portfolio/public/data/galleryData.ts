// /data/galleryData.ts

import { GalleryItem } from "@/components/Gallery/Gallery";


export const galleryItems: GalleryItem[] = [
    {
        id: "astro",
        title: "Astro Project",
        description: "Fast static sites with Astro.",
        href: "https://astro.build",
        image: "https://source.unsplash.com/random/800x600",
    },
    {
        id: "nextjs",
        title: "Next.js Project",
        description: "Fullstack React with Next.js.",
        href: "https://nextjs.org",
        image: "https://source.unsplash.com/random/800x601",
    },
    {
        id: "tailwind",
        title: "Tailwind Project",
        description: "Utility-first CSS.",
        href: "https://tailwindcss.com",
        image: "https://source.unsplash.com/random/800x602",
    },
];

export const galleryTitle = "My Awesome Projects";
export const galleryDescription =
    "Some of the coolest things I've worked on.";
