import type { Metadata, ResolvingMetadata } from "next"
import './estilos.css'
import Link from 'next/link'
import dayjs from 'dayjs'
import { aaxios } from "@/utileria"
import { BotonesCompartir } from '@/secciones'

export const fetchCache = 'force-no-store'

interface Etiquetas {
    _entityName: string;
    _instanceName: string;
    id: string;
    name: string;
    tag: string;
}

interface Articulo {
    id: string;
    title: string;
    image: string;
    createdDate: string;
    createdBy: string;
    htmlContent: string;
    tags: Etiquetas[];
    relatedPosts: Articulo[];
}

const consultar_datos_articulo = async (id: string): Promise<Articulo | null> => {
    try {
        const datos = (await aaxios.get(`/entities/Post/${id}?fetchPlan=post-details`)).data
        return {
            id: datos.id,
            title: datos.title,
            image: datos.image,
            createdDate: dayjs(datos.createdDate).format("DD/MM/YYYY"),
            createdBy: datos.createdBy,
            htmlContent: datos.htmlContent,
            tags: datos.tags,
            relatedPosts: datos.relatedPosts ?? []
        }
    } catch (ex) {
        console.error("Error al consultar articulo")
        console.error(ex)
        return null
    }
}

type PropsMetadata = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: PropsMetadata,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = (await params).id

    // fetch data
    const articulo = await consultar_datos_articulo(id)

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: "Kepler Cosmic Club - " + articulo?.title,
        description: articulo?.title,
        icons: {
            icon: "/favicon.ico",
        },
        openGraph: {
            images: [
                {
                    url: articulo?.image ?? "https://blog-kepler.escod.com.gt/_next/static/media/kepler-logo.443f4e5c.jpg",
                    width: 800,
                    height: 600,
                    alt: articulo?.title
                }
            ],
        },
    }
}

async function Articulo({
    params
}: {
    params: { id: string }
}) {
    const { id } = params
    const articulo = await consultar_datos_articulo(id as string)
    return (
        <>
            <main className="w-full container m-auto p-4 md:p-0 md:mt-6">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <article className="w-full col-span-1 md:col-span-3 md:pr-5">
                        <div className="w-full border-b-2 border-b-gray-300">
                            <h2 className="text-3xl text-bold mb-2">{articulo?.title}</h2>
                            <p className="text-gray-400 mb-1">{articulo?.createdDate}</p>
                            <p className="text-bold mb-1">Autor: {articulo?.createdBy}</p>
                            <div className='w-full mb-6 flex flex-row align-middle'>
                                {
                                    articulo?.tags.map((tag, indice) => (
                                        <Link
                                            key={`${tag.tag}-${indice}`}
                                            className="block bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2"
                                            href={`/articulos?tag=${tag.tag}`}
                                        >
                                            <span className='pr-1 pl-1'>#{tag.tag}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                            <BotonesCompartir
                                url={`articulos/${articulo?.id}`}
                                className={"mt-2 mb-3"}
                            />
                        </div>

                        <div className="mt-6 contenido-blog" dangerouslySetInnerHTML={{ __html: articulo?.htmlContent ?? "" }}></div>
                    </article>
                    <aside className="w-full col-span-1">
                        <h3 className='text-2xl font-bold'>Artículos relacionados</h3>
                        {
                            articulo?.relatedPosts.map((articulo, indice) => (
                                <Link
                                    key={`${articulo.id}-${indice}`}
                                    href={`/articulos/${articulo.id}`}
                                >
                                    <img
                                        src={articulo.image}
                                        alt={`Imagen de ${articulo.title}`}
                                        className="w-full object-cover aspect-[4/3]"
                                        loading="lazy"
                                    />
                                    <div className="flex flex-col p-4">
                                        <h4 className="font-bold" style={{ display: "-webkit-box", maxWidth: "45ch", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}>{articulo.title}</h4>
                                        <p className="text-gray-400 mt-2">{dayjs(articulo.createdDate).format("DD/MM/YYYY")}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </aside>
                </div>
            </main>
        </>
    )

}

export default Articulo