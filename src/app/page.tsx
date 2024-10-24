import type { Metadata } from "next";
import {
    Banner,
    ArticulosRecientes
} from '@/secciones'

export const metadata: Metadata = {
    title: "Kepler Cosmic Club - Blog",
    description: "Kepler Cosmic Club es un blog de ciencia y tecnología sobre astronomía.",
    authors: [
        {
            name: "Kepler Cosmic Club",
        }
    ],
    openGraph: {
        images: [
            {
                url: "https://media-gua1-1.cdn.whatsapp.net/v/t61.24694-24/455810019_1243179430357445_4985147591261018444_n.jpg?ccb=11-4&oh=01_Q5AaIAI8_-gTTjGQ3p6dfawsZA9j1uqHD3lFyV6r6jWMI9xz&oe=67211B6E&_nc_sid=5e03e0&_nc_cat=100",
                width: 800,
                height: 600,
                alt: "Kepler Cosmic Club - Blog"
            }
        ]
    }
};

export default function Home() {
    return (
        <>
            <Banner />
            <main className="w-full container m-auto p-4 md:p-0">
                <ArticulosRecientes maxArticulos={5} />
            </main>
        </>
    );
}
