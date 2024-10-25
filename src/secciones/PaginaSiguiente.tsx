"use client"

import { LinkBoton } from "@/componentes"
import { useSearchParams } from "next/navigation"
import { ArrowRight } from 'lucide-react'

function PaginaSiguiente({
    className
}: {
    className?: string
}) {

    const parametros = useSearchParams()

    const pagina = parseInt(parametros.get("pagina") || "1")

    const siguiente = pagina + 1

    return (
        <div className={className}>
            <LinkBoton href={`/articulos?pagina=${siguiente}`}>
                Ver más artículos
            </LinkBoton>
        </div>
    )
}

export {
    PaginaSiguiente
}