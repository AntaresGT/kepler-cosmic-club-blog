import { HoyoNegro } from './HoyoNegro'
import { LinkBoton } from '@/componentes'
function Banner() {
    return (
        <section className="w-full flex items-center justify-center p-4 md:p-0">
            <div className="container items-center grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <h2 className="md:text-4xl font-bold text-2xl">Kepler cosmic club</h2>
                    <p className="mb-4 md:text-lg text-xl max-w-[60ch] break-words">Descubre los secretos del cosmos, desde las estrellas más cercanas hasta las galaxias más lejanas.</p>
                    <LinkBoton
                        href="/articulos"
                    >
                        Explora el cosmos con nosotros 🚀
                    </LinkBoton>
                </div>
                <div className="w-full mt-4 md:mt-0">
                    <HoyoNegro />
                </div>
            </div>
        </section>
    )
}

export { Banner }