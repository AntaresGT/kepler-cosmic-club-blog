import type { Metadata } from "next"
import Link from "next/link"
import dayjs from "dayjs"
import { aaxios } from "@/utileria"
import { PaginaSiguiente, BuscardorArticulo } from "@/secciones";

export const fetchCache = 'force-no-store'

interface Articulo {
    id: string;
    titulo: string;
    imagen: string;
    fecha: string;
}

export const metadata: Metadata = {
    title: "Kepler Cosmic Club - Artículos",
    description: "Kepler Cosmic Club es un blog de ciencia y tecnología sobre astronomía.",
    icons: {
        icon: "/favicon.ico",
    },
    authors: [
        {
            name: "Kepler Cosmic Club",
        }
    ],
    openGraph: {
        images: [
            {
                url: "https://blog-kepler.escod.com.gt/_next/static/media/kepler-logo.443f4e5c.jpg",
                width: 800,
                height: 600,
                alt: "Kepler Cosmic Club - Blog"
            }
        ]
    }
}

interface IFiltros {
    filter: {
        conditions?: any[]
    },
    fetchPlan: string
}

async function consultar_x_etiqueta(tag: string) {
    return (await aaxios.get(`/queries/Post/postByTag?tagName=${encodeURI(tag)}`)).data
}

async function consulta_normal(pagina: string, maxArticulos: number) {
    return (await aaxios.get(`/entities/Post?fetchPlan=posts-list-base&limit=${maxArticulos}&sort=-createdDate&offset=${(parseInt(pagina) - 1) * maxArticulos}`)).data
}

async function consulta_x_busqueda(busqueda: string) {
    const filtro: IFiltros = {
        filter: { conditions: [] },
        fetchPlan: "posts-list-base"
    }
    filtro.filter.conditions?.push(
        {
            group: "or",
            conditions: [
                {
                    property: "name",
                    operator: "contains",
                    value: busqueda
                },
                {
                    property: "title",
                    operator: "contains",
                    value: busqueda
                },
                {
                    property: "htmlContent",
                    operator: "contains",
                    value: busqueda
                }
            ]
        }
    )

    return (await aaxios.post(`/entities/Post/search`, filtro)).data
}

async function consultar_articulos(
    maxArticulos: number,
    tag?: string,
    pagina?: string,
    busqueda?: string
): Promise<Articulo[]> {
    try {
        let datos: any = []

        if (tag) {
            datos = await consultar_x_etiqueta(tag as string)
        }

        if (!tag && !busqueda) {
            datos = await consulta_normal(pagina ?? "1", maxArticulos)
        }

        if (busqueda) {
            datos = await consulta_x_busqueda(busqueda as string)
        }

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

async function Articulos({
    searchParams
}: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }> | undefined
}) {
    const { tag, pagina, busqueda } = await searchParams ?? {}
    const articulos = await consultar_articulos(10, tag as string, pagina as string, busqueda as string)

    return (
        <>
            <main className="w-full container m-auto p-4 md:p-0 mt-10 md:mb-72">
                <h2 className="text-3xl text-bold mb-3">Descubre nuestras más recientes publicaciones</h2>
                <BuscardorArticulo />
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
                {
                    articulos.length === 0 &&
                    <div className="w-full flex justify-center mt-10">
                        <p>No se encontraron más artículos</p>
                    </div>
                }
                {
                    (
                        (articulos.length > 0) &&
                        ((busqueda == null) && (tag == null))
                    ) && <PaginaSiguiente className="mt-6" />
                }
            </main>
        </>
    )
}

export default Articulos