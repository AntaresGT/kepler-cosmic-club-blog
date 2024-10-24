import "./globals.css";

// Secciones
import {
    Encabezado,
    Pie
} from '@/secciones'

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
