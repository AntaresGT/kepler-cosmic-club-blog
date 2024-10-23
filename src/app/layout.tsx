import type { Metadata } from "next";
import "./globals.css";

// Secciones
import {
    Encabezado,
    Pie
} from '@/secciones'

export const metadata: Metadata = {
    title: "Kepler Cosmic Club - Blog",
    description: "Kepler Cosmic Club es un blog de ciencia y tecnología sobre astronomía.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`antialiased`}
            >
                <Encabezado />
                {children}
                <Pie />
            </body>
        </html>
    );
}
