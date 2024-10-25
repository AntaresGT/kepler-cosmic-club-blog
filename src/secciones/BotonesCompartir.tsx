"use client"
import {
    Facebook,
    Twitter,
    Mail,
    Copy
} from 'lucide-react';
import WhatsAppIcon from '@/iconos/Whatsappicon.svg';
import { LINKS_COMPARTIR_REDES_SOCIALES } from '@/constantes'

const Iconos: any = {
    facebook: Facebook,
    twitter: Twitter,
    mail: Mail,
    whatsapp: ({ className }: { className: string }) => {
        return <img src={WhatsAppIcon.src} className={className} alt="WhatsApp" />
    },
    copy: Copy
};

function BotonesCompartir({ url, className }: { url: string, className?: string }) {
    return (
        <>
            <div className={`flex flex-row gap-2 ${className ?? ""}`}>
                {LINKS_COMPARTIR_REDES_SOCIALES.map((red: any, index: number) => {
                    const Icono = Iconos[red.icono];

                    if(red.action === "copy") {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.href)
                                    alert("Enlace copiado al portapapeles")
                                }}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                                <Icono className="w-4 h-4 text-gray-600" />
                            </button>
                        )
                    }

                    return (
                        <a
                            key={index}
                            href={red.url + window.location.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                            <Icono className="w-4 h-4 text-gray-600" />
                        </a>
                    )
                })}
            </div>
        </>
    )
}

export {
    BotonesCompartir
}