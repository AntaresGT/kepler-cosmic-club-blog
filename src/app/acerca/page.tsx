import Link from "next/link"
import { EstrellasFondo } from "@/secciones"

function Acerca() {
    return (
        <>
            <EstrellasFondo />
            <main className="w-full container m-auto p-4 md:p-0 mt-24 md:mb-72">
                <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <div>
                        <h2 className="text-3xl font-bold">Sobre Nosotros</h2>
                        <p className="max-w-[70ch] mt-5">
                            Kepler Cosmic Club es un club guatemalteco virtual de Astronomía sin fines de lucro, fundado en Quetzaltenango el 7 de septiembre del 2,023.
                        </p>
                        <p className="max-w-[70ch] mt-1">
                            Buscamos mantener informados a nuestros seguidores sobre eventos astronómicos y actualizaciones recientes sobre estos temas.
                        </p>
                        <p className="max-w-[70ch] mt-1">
                            También queremos fomentar la pasión por los estudios astronómicos e inculcar a todo el público sobre todo lo relacionado a esta rama de la ciencia de manera comprensible, actualizada y correcta.
                        </p>
                        <p className="max-w-[70ch] mt-1">
                            En Kepler Cosmic Club creemos que el aprendizaje de la astronomía debe ser revolucionaria, inclusiva, liberal, accesible, activa y llena de juventud.
                        </p>

                        <Link
                            href="https://www.instagram.com/keplercosmicclub/"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                        >
                            #SciencelsRevolution
                        </Link>
                    </div>
                    <img
                        src="https://pps.whatsapp.net/v/t61.24694-24/410913303_1015298553101308_81550429638801787_n.jpg?ccb=11-4&oh=01_Q5AaIAOYPc0EmzL2QwlVbL_AISwrgk-860X4ZEeYxj_7n931&oe=671876D5&_nc_sid=5e03e0&_nc_cat=106"
                        alt="Instagram Logo Kepler Cosmic Club"
                        className="rounded-full w-60 h-60 border-4 border-blue-200 cursor-pointer mb-10 hidden md:block"
                    />
                </section>
            </main>
        </>
    )
}

export default Acerca