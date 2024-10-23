import Link from "next/link"

async function consultar_articulos() {
    return [
        {
            id: 1,
            titulo: 'El Sol',
            descripcion: 'El Sol es una estrella que se encuentra en el centro del sistema solar y es la mayor fuente de radiación electromagnética de este sistema planetario.',
            imagen: 'https://content.nationalgeographic.com.es/medio/2022/08/07/el-sol_e26b22b0_1200x720.jpg',
            fecha: '2023-09-07',
        },
        {
            id: 2,
            titulo: 'La Luna',
            descripcion: 'La Luna es el único satélite natural de la Tierra y el quinto satélite más grande del sistema solar. Es el satélite natural más grande en el sistema solar en relación con el tamaño de su planeta.',
            imagen: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/ksc-20220612-ph-jbs01_0034-orig.jpg?w=1600&h=1067',
            fecha: '2023-09-07',
        },
        {
            id: 3,
            titulo: 'Marte',
            descripcion: 'Marte es el cuarto planeta del sistema solar en orden de distancia desde el Sol y el segundo más pequeño después de Mercurio.',
            imagen: 'https://www.semana.com/resizer/v2/O4O7AXSVZRGXTDMYYCGYVG6CTE.jpg?auth=7fe36c99a872d12a596c0f1f0a381cd242e650ab21dc2c207cfe810de6939ef8&smart=true&quality=75&width=1280',
            fecha: '2023-09-07',
        },
        {
            id: 4,
            titulo: 'Júpiter',
            descripcion: 'Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol. Forma parte de los denominados planetas exteriores o gaseosos.',
            imagen: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2017/04/jupiter-hubble.png?fit=2000%2C2000&quality=50&strip=all&ssl=1',
            fecha: '2023-09-07',
        },
        {
            id: 5,
            titulo: 'Saturno',
            descripcion: 'Saturno es el sexto planeta del sistema solar, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra.',
            imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1200px-Saturn_during_Equinox.jpg',
            fecha: '2023-09-07',
        },
        {
            id: 6,
            titulo: 'Urano',
            descripcion: 'Urano es el séptimo planeta del sistema solar, el tercero en cuanto a tamaño, y el cuarto en cuanto a masa. Debe su nombre al dios griego del cielo Urano, padre de Crono y abuelo de Zeus.',
            imagen: 'https://spaceplace.nasa.gov/all-about-uranus/sp/uranus2.sp.jpg',
            fecha: '2023-09-07',
        },
        {
            id: 7,
            titulo: 'Neptuno',
            descripcion: 'Neptuno es el octavo planeta del sistema solar, el último en cuanto a distancia desde el Sol. Forma parte de los denominados planetas exteriores y, dentro de estos, es uno de los gigantes helados.',
            imagen: 'https://content.nationalgeographic.com.es/medio/2022/08/03/el-planeta-neptuno_bfb396f8_1280x1278.jpg',
            fecha: '2023-09-07',
        },
        {
            id: 8,
            titulo: 'Plutón',
            descripcion: 'Plutón es un planeta enano del sistema solar que forma parte de los denominados objetos transneptunianos y, hasta agosto de 2006, era considerado el noveno y más pequeño de los planetas del sistema solar.',
            imagen: 'https://static.nationalgeographic.es/files/styles/image_3200/public/pia19952.jpg?w=1600',
            fecha: '2023-09-07',
        },
    ]
}

async function Articulos() {

    const articulos = await consultar_articulos()

    return (
        <>
            <main className="w-full container m-auto p-4 md:p-0 mt-10 md:mb-72">
                <h2 className="text-3xl text-bold mb-10">Descubre nuestras más recientes publicaciones</h2>
                <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
                    {articulos.map(articulo => (
                        <Link
                            href={`/articulos/${articulo.id}`}
                            key={`${articulo.titulo}-${articulo.id}`}
                        >
                            <article className="w-full p-4 mb-4 rounded-md shadow-md transition-transform transform hover:scale-105 border border-blue-500">
                                <img
                                    src={articulo.imagen}
                                    alt={articulo.titulo}
                                    className="w-full object-cover rounded-md aspect-[16/9]"
                                />
                                <h2 className="text-2xl font-bold mt-2">{articulo.titulo}</h2>
                                <p className="mt-2">{articulo.descripcion}</p>
                                <p className="mt-2 text-sm text-gray-300">{articulo.fecha}</p>
                            </article>
                        </Link>
                    ))}
                </section>
            </main>
        </>
    )
}

export default Articulos