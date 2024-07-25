import DolarData from "@/components/DolarData"
import Head from "next/head";


const title = "Dolar Api Argentina"

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
