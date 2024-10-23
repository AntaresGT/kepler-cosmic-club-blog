import Link from "next/link"
import { aaxios } from "@/utileria"
import dayjs from "dayjs"

interface PropsArticulosRecientes {
    /** Indica la cantidad de articulos que consultara desde la base de datos */
    maxArticulos: number;
}

interface Articulo {
    id: string;
    titulo: string;
    imagen: string;
    fecha: string;
}


async function consultar_articulos(maxArticulos: number): Promise<Articulo[]> {

    try {
        const datos = await (await aaxios.get(`/entities/Post?limit=${maxArticulos}&sort=-createdDate`)).data
        return datos.map((articulo: any) => {
            return {
                id: articulo.id,
                titulo: articulo.title,
                imagen: articulo.image,
                fecha: dayjs(articulo.createdDate).format("DD/MM/YYYY")
            }
        })
    } catch (ex) {
        return []
    }
}

async function ArticulosRecientes({ maxArticulos }: PropsArticulosRecientes) {
    const articulos = await consultar_articulos(maxArticulos)
    return (
        <section className="w-full">
            <h3 className="font-semibold text-2xl">Artículos recientes</h3>
            <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    articulos.map((articulo, indice) => {
                        return (
                            <article key={`${articulo.titulo}-${indice}`} className="border border-blue-500 flex group relative overflow-hidden transition-transform hover:scale-105 rounded-md">
                                <Link
                                    href={`/articulos/${articulo.id}`}
                                    className="flex flex-col"
                                >
                                    <img
                                        src={articulo.imagen}
                                        alt={`Imagen de ${articulo.titulo}`}
                                        className="w-full object-cover aspect-[4/3]"
                                        loading="lazy"
                                    />
                                    <div className="flex flex-col p-4">
                                        <h4 className="font-bold" style={{ display: "-webkit-box", maxWidth: "45ch", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}>{articulo.titulo}</h4>
                                        <p className="text-gray-400 mt-2">{articulo.fecha}</p>
                                    </div>
                                </Link>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export {
    ArticulosRecientes
}