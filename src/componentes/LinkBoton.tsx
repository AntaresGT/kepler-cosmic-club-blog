import Link from "next/link"

interface PropsLinkBoton{
    /** Contenido del enlace */
    children: string | React.ReactNode;
    /** URL */
    href: string;
    /** Clases CSS */
    className?: string;
}

function LinkBoton({
    children,
    href,
    className
}: PropsLinkBoton){

    return(
        <Link
            href={href}
            className={`transition-all bg-blue-500 text-white px-5 py-2 rounded shadow-md hover:bg-blue-600 ${className ?? ""}`}
        >
            {children}
        </Link>
    )
}

export {
    LinkBoton
}