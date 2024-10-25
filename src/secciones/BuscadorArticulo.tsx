
import { Search } from "lucide-react";

function BuscardorArticulo() {
    return (
        <form action="/articulos" method="get" className="w-full flex justify-center items-center mb-9">
            <input
                type="search"
                name="busqueda"
                placeholder="Buscar artículos"
                className="w-full p-2 border border-slate-900 rounded-md bg-slate-700 checked:border-slate-950"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md ml-2"
            >
                <Search size={24} />
            </button>
        </form>
    )
}

export {
    BuscardorArticulo
}