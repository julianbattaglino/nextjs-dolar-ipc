import React, { useState, useEffect } from 'react';

const InflationData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.argentinadatos.com/v1/finanzas/indices/inflacion?page=3&per_page=12');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data.slice(-12)); // Extract only the last 12 elements
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchData();
  }, []);

  // Function to get month name from a date string
  const getMonthName = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long' };
    return date.toLocaleString('es-ES', options); // 'es-ES' for Spanish
  };

  // Function to get year from a date string
  const getYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  if (isLoading) return <p>Cargando...</p>;

  if (!data) {
    return <p>No pudimos cargar la informacion, refresca la pagina.</p>;
  }

  return (
    <>
      <div className='my-5'>
        <h2 class="text-center text-5xl gradient-text pb-10">Datos IPC (Inflaciòn Argentina)</h2>
        <span class="gradient-text text-xl">Datos Inflaciòn Mensual Argentina</span>
        <h2 className='pb-5'>Últimos 12 registros de Inflación</h2>
        <table className="table-auto">
          <thead className='bg-white dark:bg-gray-800 rounded border dark:border-gray-700'>
            <tr className="">
              <th className=''>Mes</th>
              <th className=''>Año</th>
              <th className=''>Valor Ipc</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className='text-center bg-white dark:bg-gray-800 rounded border dark:border-gray-700' key={item.id}>
                <td className="capitalize">{getMonthName(item.fecha)}</td>
                <td className="">{getYear(item.fecha)}</td>
                <td className="">{item.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InflationData;
