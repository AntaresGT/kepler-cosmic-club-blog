import type { Metadata } from "next";
import {
    Banner,
    ArticulosRecientes
} from '@/secciones'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
    title: "Kepler Cosmic Club - Blog",
    icons: {
        icon: "/favicon.ico",
    },
    description: "Kepler Cosmic Club es un blog de ciencia y tecnología sobre astronomía.",
    authors: [
        {
            name: "Kepler Cosmic Club",
        }
    ],
    openGraph: {
        images: [
            {
                url: "https://blog-kepler.escod.com.gt/_next/static/media/kepler-logo.443f4e5c.jpg",
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
                <ArticulosRecientes maxArticulos={4} />
            </main>
        </>
    );
}
