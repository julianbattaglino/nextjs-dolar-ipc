import IpcDataMensual from "@/components/IpcDataMensual";
import Head from "next/head";

const title = "Datos Inflaciòn Mensual Argentina"

const Inflacion = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="container px-5">
                <IpcDataMensual />
            </div>
        </>
    )
}

export default Inflacion;