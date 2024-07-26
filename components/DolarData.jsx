
import { useState, useEffect } from 'react'

const DolarData = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dolarapi.com/v1/dolares')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data);
      })
  }, [])

  if (isLoading) return <p>Cargando...</p>
  if (!data) return <p>No pudimos cargar la informacion, refresca la pagina.</p>

  return (
    <>

      <div className="py-10 px-4 space-y-10">

        <div class="col-md-6 text-center">

          <span class="text-5xl md:text-7xl gradient-text">Dolar en Argentina.</span>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">

          <div className="flex flex-col items-center gap-4">
            <div className="md:order-2 flex flex-col justify-center items-center flex-1">
            </div>
            <div className="flex flex-col items-center gap-4 w-full">

              {/* Dolar Oficial Data*/}
              <div className="dolar-card flex flex-col p-4 bg-white dark:bg-gray-800 rounded border dark:border-gray-700 w-full md:max-w-sm">
                <h1 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200">
                  Dólar Oficial
                </h1>
                <div>
                  <div className="flex items-center w-full max-w-64 mx-auto">
                    <dl className="flex-1 flex flex-col justify-center items-center">
                      <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                        Compra
                      </dt>
                      <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[0].compra}</dd>
                    </dl>
                    <div className="flex-1"></div>
                    <dl className="flex-1 flex flex-col justify-center items-center">
                      <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                        Venta
                      </dt>
                      <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[0].venta}</dd>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Dolar Blue Data*/}
              <div className="dolar-card flex flex-col p-4 bg-white dark:bg-gray-800 rounded border dark:border-gray-700 w-full md:max-w-sm">
                <h1 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200">
                  Dólar Blue
                </h1>
                <div>
                  <div className="flex items-center w-full max-w-64 mx-auto">
                    <dl className="flex-1 flex flex-col justify-center items-center">
                      <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                        Compra
                      </dt>
                      <dd className="text-gray-800 dark:text-gray-200 font-bold">
                        ${data[1].compra}
                      </dd>
                    </dl>
                    <div className="flex-1"></div>
                    <dl className="flex-1 flex flex-col justify-center items-center">
                      <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                        Venta
                      </dt>
                      <dd className="text-gray-800 dark:text-gray-200 font-bold">
                        ${data[1].venta}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">

            {/* Dolar Bolsa */}
            <div className="dolar-card flex flex-row flex-wrap items-center p-4 bg-white dark:bg-gray-800 rounded border dark:border-gray-700 w-full">
              <h1 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200">
                Dólar Bolsa
              </h1>
              <div className="flex-1 lg:min-w-10"></div>
              <div className="flex justify-end flex-grow lg:gap-4">
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Compra
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[2].compra}</dd>
                </dl>
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Venta
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[2].venta}</dd>
                </dl>
              </div>
            </div>

            {/* Dolar CCL */}
            <div className="dolar-card flex flex-row flex-wrap items-center p-4 bg-white dark:bg-gray-800 rounded border dark:border-gray-700 w-full">
              <h1 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200">
                Dólar CCL
              </h1>
              <div className="flex-1 lg:min-w-10"></div>
              <div className="flex justify-end flex-grow lg:gap-4">
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Compra
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[3].compra}</dd>
                </dl>
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Venta
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[3].venta}</dd>
                </dl>
              </div>
            </div>

            {/* Dolar Mayorista */}
            <div className="dolar-card flex flex-row flex-wrap items-center p-4 bg-white dark:bg-gray-800 rounded border dark:border-gray-700 w-full">
              <h1 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200">
                Dólar Mayorista
              </h1>
              <div className="flex-1 lg:min-w-10"></div>
              <div className="flex justify-end flex-grow lg:gap-4">
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Compra
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[4].compra}</dd>
                </dl>
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Venta
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[4].venta}</dd>
                </dl>
              </div>
            </div>

            {/* Dolar Tarjeta */}
            <div className="dolar-card flex flex-row flex-wrap items-center p-4 bg-white dark:bg-gray-800 rounded border dark:border-gray-700 w-full">
              <h1 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200">
                Dólar Tarjeta
              </h1>
              <div className="flex-1 lg:min-w-10"></div>
              <div className="flex justify-end flex-grow lg:gap-4">
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Compra
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[6].compra}</dd>
                </dl>
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Venta
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[6].venta}</dd>
                </dl>
              </div>
            </div>

            {/* Dolar Cripto */}
            <div className="dolar-card flex flex-row flex-wrap items-center p-4 bg-white dark:bg-gray-800 rounded border dark:border-gray-700 w-full">
              <h1 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200">
                Dólar Cripto
              </h1>
              <div className="flex-1 lg:min-w-10"></div>
              <div className="flex justify-end flex-grow lg:gap-4">
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Compra
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[5].compra}</dd>
                </dl>
                <dl className="flex flex-col justify-center items-center w-20">
                  <dt className="text-xs uppercase text-gray-600 dark:text-gray-400">
                    Venta
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200 font-bold">${data[5].venta}</dd>
                </dl>
              </div>
            </div>


          </div>
        </div>

      </div>



    </>

  )
}

export default DolarData;