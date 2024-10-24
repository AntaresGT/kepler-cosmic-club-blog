"use client"

import {
    Facebook,
    Twitter,
    Mail,
    Copy
} from 'lucide-react';
import WhatsAppIcon from '@/iconos/Whatsappicon.svg';

const Iconos: any = {
    facebook: Facebook,
    twitter: Twitter,
    mail: Mail,
    whatsapp: ({ className }: { className: string }) => {
        return <img src={WhatsAppIcon.src} className={className} alt="WhatsApp" />
    },
    copy: Copy
};

const redesSociales = [
    {
        nombre: "Twitter",
        icono: "twitter",
        url: "https://twitter.com/intent/tweet?url="
    },
    {
        nombre: "WhatsApp",
        icono: "whatsapp",
        url: "https://api.whatsapp.com/send?text="
    },
    {
        nombre: "Correo electrónico",
        icono: "mail",
        url: "mailto:?body="
    },
    {
        nombre: "Copiar enlace",
        icono: "copy",
        action: "copy"
    }
];

function BotonesCompartir({ url, className }: { url: string, className?: string }) {
    return (
        <>
            <div className={`flex flex-row gap-2 ${className ?? ""}`}>
                {redesSociales.map((red: any, index: number) => {
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
                            href={red.url + window.location.href + url}
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