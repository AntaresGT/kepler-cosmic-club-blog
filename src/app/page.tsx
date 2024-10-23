import Image from "next/image";
import {
    Banner,
    ArticulosRecientes
} from '@/secciones'

export default function Home() {
    return (
        <>
            <Banner />
            <main className="w-full container m-auto p-4 md:p-0">
                <ArticulosRecientes maxArticulos={5} />
            </main>
        </>
    );
}
