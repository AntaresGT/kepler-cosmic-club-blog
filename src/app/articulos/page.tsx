import Link from "next/link"
import dayjs from "dayjs"
import { aaxios } from "@/utileria"

interface Articulo {
    id: string;
    titulo: string;
    imagen: string;
    fecha: string;
}

async function consultar_articulos(maxArticulos: number): Promise<Articulo[]> {

    try {
        const datos = await (await aaxios.get(`/entities/Post?fetchPlan=posts-list-base&limit=${maxArticulos}&sort=-createdDate`)).data
        return datos.map((articulo: any) => {
            return {
                id: articulo.id,
                titulo: articulo.title,
                imagen: articulo.image,
                fecha: dayjs(articulo.createdDate).format("DD/MM/YYYY")
            }
        })
    } catch (ex) {
        console.error("Error al consultar articulos")
        console.error(ex)
        return []
    }
}

async function Articulos() {

    const articulos = await consultar_articulos(20)

    return (
        <>
            <main className="w-full container m-auto p-4 md:p-0 mt-10 md:mb-72">
                <h2 className="text-3xl text-bold mb-10">Descubre nuestras más recientes publicaciones</h2>
                <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
                    {articulos.map(articulo => (
                        <Link
                            href={`/articulos/${articulo.id}`}
                            key={`${articulo.titulo}-${articulo.id}`}
                            className="col-span-1"
                        >
                            <article className="w-full mb-4 rounded-md shadow-md transition-transform transform hover:scale-105 border border-blue-500">
                                <img
                                    src={articulo.imagen}
                                    alt={articulo.titulo}
                                    className="w-full object-cover rounded-md aspect-[4/3]"
                                />
                                <h2 className="text-2xl font-bold mt-2 pr-2 pl-2">{articulo.titulo}</h2>
                                {/*<p className="mt-2">{articulo.descripcion}</p>*/}
                                <p className="mt-2 text-sm text-gray-300 pr-2 pl-2 pb-2">{articulo.fecha}</p>
                            </article>
                        </Link>
                    ))}
                </section>
            </main>
        </>
    )
}

export default Articulos