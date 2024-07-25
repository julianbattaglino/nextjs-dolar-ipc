import DolarData from "@/components/DolarData"
import Head from "next/head";


const title = "Cotizacion Dolar Argentina"

export default function Home() {
  return (
    <>

      <Head>
        <title>{title}</title>
      </Head>
      <div className="">
        <DolarData />
      </div>

    </>
  );
}
