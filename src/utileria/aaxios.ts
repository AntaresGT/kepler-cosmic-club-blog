import axios from "axios"

/**
 * Crear una instancia de axios con la configuración base
 * está instancia se puede importar en componentes de servidor
 * no se puede importar en componentes de cliente
 */
const aaxios = axios.create({
    baseURL: process.env.BASE_URL,
})

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

aaxios.interceptors.request.use((config) => {
    return config
})

export {
    aaxios
}