import { aaxios } from "@/utileria";

interface Articulo {
    id: string;
    title: string;
    image: string;
    createdDate: string;
    createdBy: string;
    htmlContent: string;
}

const consultar_datos_articulo = async (id: string): Promise<Articulo | null> => {
    try {
        const datos = (await aaxios.get(`/entities/Post/${id}?fetchPlan=post-details`)).data
        console.log(datos)
        return {
            id: datos.id,
            title: datos.title,
            image: datos.image,
            createdDate: datos.createdDate,
            createdBy: datos.createdBy,
            htmlContent: datos.htmlContent
        }
    } catch (ex) {
        return null
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
        <main className="w-full container m-auto p-4 md:p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <article className="w-full">
                    <h2 className="text-3xl text-bold mb-2">{articulo?.title}</h2>
                    <p className="text-gray-400 mb-1">{articulo?.createdDate}</p>
                    <p className="text-bold mb-6">Autor: {articulo?.createdBy}</p>
                    <div dangerouslySetInnerHTML={{ __html: articulo?.htmlContent ?? "" }}></div>
                </article>
                <aside className="w-full">

                </aside>
            </div>
        </main>
    )

}

export default Articulo