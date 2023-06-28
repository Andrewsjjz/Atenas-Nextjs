import React from 'react'
import Layout from "../components/layout"
import Ejercicio from '../components/ejercicio'


export default function Rutinas({ejercicios}) {



  return (
    <>
    <Layout>
<div>
<h1 className='text-center font-bold text-3xl mt-10'>Lista de rutinas en funcion del musculo</h1>
</div>

<div className="flex justify-center items-center">
<div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div className="flex flex-col items-center justify-center">
        <p className="text-xl leading-normal text-center text-gray-600 lg:w-1/2 md:w-10/12 w-11/12">Porque pensamos en ti y te daremos unas rutinas que puedes aplicar</p>
    </div>


    {ejercicios.length && (
    <div class="py-10 sm:py-16 lg:py-24 grid max-w-md grid-cols-1 md:gap-6 gap-6
    mx-auto lg:grid-cols-3 lg:max-w-full">
        {ejercicios.map(ejercicio => (
            <Ejercicio
            key={ejercicio.id}
            ejercicio={ejercicio.attributes}
            />
        ))}
</div>
    )}

    </div>
</div>

    </Layout>

    </>
  )
}

export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/ejercicios?populate=imagen`)
    const {data: ejercicios} = await respuesta.json()
    return {
      props: {
        ejercicios
      }
    }
    
  }
