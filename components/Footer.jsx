import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="divide-y divide-blue-200 container pb-10 px-5">
                
                <Link href="https://www.julianbattaglino.com.ar" target="_blank" rel="noopener noreferrer">
                    <span> Desarrollado por Julian Battaglino</span>
                </Link>
                <Link href="https://dolarapi.com/docs/" target="_blank" rel="noopener noreferrer">
                <p>Datos extraidos de <span>DolarApi.com</span>, API de Cotizaciones de Dólar y Monedas desarrollada por Enzo Notario.</p>
            </Link>

            </div>

        </>
    )
}

export default Footer;