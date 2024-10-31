import axios from "axios"

/**
 * Crear una instancia de axios con la configuración base
 * está instancia se puede importar en componentes de servidor
 * no se puede importar en componentes de cliente
 */
const aaxios = axios.create({
    baseURL: process.env.BASE_URL,
})

aaxios.interceptors.request.use((config) => {

    config.headers['Cache-Control'] = 'no-cache'
    config.headers['Pragma'] = 'no-cache'
    config.headers['Expires'] = '0'

    return config
})

export {
    aaxios
}