import Link from 'next/link'
import {
    Telescope
} from 'lucide-react'
import { RUTAS_WEB } from '@/constantes'

function Encabezado() {
    return (
        <header
            className="w-full flex items-center justify-center p-4"
        >
            <div
                className='flex flex-col md:flex-row items-center justify-between container'
            >
                    <Link href="/" className='flex items-center justify-between mt-3'>
                        <Telescope className='md:w-8 md:h-8'  />
                        <span className="ml-2 font-bold md:text-3xl">Kepler cosmic club</span>
                    </Link>
                <nav
                    className="flex items-center mt-4 md:mt-0"
                >
                    {
                        RUTAS_WEB.map((ruta, indice) => {
                            return (
                                <Link key={`${ruta.texto}-${indice}`} href={ruta.ruta} className='hover:underline xl:text-lg md:text-md'>
                                    <span className="ml-4">{ruta.texto}</span>
                                </Link>
                            )
                        })
                    }
                </nav>
            </div>
        </header>
    )
}

export {
    Encabezado
}
