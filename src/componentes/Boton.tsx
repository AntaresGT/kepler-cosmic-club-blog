interface PropsBoton{
    children: string | React.ReactNode;
}

function Boton({
    children
}: PropsBoton){
    return(
        <button
            className="transition-all bg-blue-500 text-white px-5 py-2 rounded shadow-md hover:bg-blue-600"
        >
            {children}
        </button>
    )
}

export {
    Boton
}