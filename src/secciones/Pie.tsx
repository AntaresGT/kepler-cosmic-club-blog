import Link from "next/link"
import { RUTAS_WEB } from "@/constantes"
import KeplerLogo from '@/iconos/kepler-logo.jpg'
function Pie() {
    return (
        <footer className="w-full bg-gray-950 p-4 md:p-0 mt-10 border-t border-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Kepler Cosmic Club</h3>
                    <p className="text-sm">
                        Somos un club guatemalteco dedicado a la astronomía y todos los temas en el ámbito espacial.
                        Únete a nosotros en esta fascinante exploración del cosmos.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Enlaces Rápidos</h3>
                    <ul className="space-y-2">
                        {
                            RUTAS_WEB.map((ruta, indice) => (
                                <li key={indice}>
                                    <Link href={ruta.ruta} className="text-sm hover:underline transition-colors">{ruta.texto}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8">
                <h3 className="text-xl font-bold mb-4 text-center">Explora el universo con</h3>
                <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
                    <img
                        src={KeplerLogo.src}
                        alt="Instagram Logo Kepler Cosmic Club"
                        className="rounded-full w-60 h-60 border-4 border-blue-600 cursor-pointer"
                    />
                </div>
            </div>
            <div className="mt-8 text-center text-sm">
                <p>© 2024 Kepler Cosmic Club. Casi Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export {
    Pie
}