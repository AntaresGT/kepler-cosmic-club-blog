
const RUTAS_WEB = [
    {
        texto: 'Inicio',
        ruta: '/'
    },
    {
        texto: 'Artículos',
        ruta: '/articulos'
    },
    {
        texto: 'Sobre Nosotros',
        ruta: '/acerca'
    }
]

const LINKS_COMPARTIR_REDES_SOCIALES = [
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

const REDES_SOCIALES = [
    {
        nombre: 'WhatsApp',
        url: 'https://whatsapp.com/channel/0029VaCMTq4LNSZwHQ6vgb1y'
    },
    {
        nombre: 'Twitter',
        url: 'https://www.twitter.com'
    },
    {
        nombre: 'Instagram',
        url: 'https://www.instagram.com'
    },
]

export {
    RUTAS_WEB,
    LINKS_COMPARTIR_REDES_SOCIALES,
    REDES_SOCIALES
}