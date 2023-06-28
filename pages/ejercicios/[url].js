
import { useState } from "react";
import Image from "next/future/image";
import Layout from "../../components/layout";


export default function EjercicioSeleccionado({ejercicios}) {
    

    const {nombre, descripcion, imagen, ejemplo, musculo} = ejercicios[0].attributes

    const codigo = {
        __html : descripcion
    }

  return (
    <>
    <Layout>
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto lg:ml-40 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{nombre}</h2>
        </div>

        <div class="flex mx-auto mt-12 mr-16">
            <div>
                <div className="flex items-center justify-center">
                <Image class="flex" src={imagen.data.attributes.url} alt="Imagen" width={700} height={700} />
                </div>

                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-orange-500 bg-orange-100 mt-9">{musculo}</span>
                <p class="mt-6 text-xl font-semibold">
                </p>
                <p dangerouslySetInnerHTML={codigo} class="mt-4 text-gray-600 whitespace-pre-wrap whitespace-pre-wrap-moz 
              whitespace-pre-wrap-o"></p>

                <div className="mt-7">
                    <button class="inline-flex items-center justify-center w-full px-8 py-4 
                    text-base font-bold leading-6 text-white bg-orange-600 border border-transparent 
                    rounded-full md:w-auto hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        <a href={ejemplo} target="_blank" rel="noopener noreferrer">
                        Aqui un ejemplo con video
                        </a>
                    </button>
                </div>


                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>


            </div>


        </div>
    </div>
</section>


    </Layout>
      
    </>
  )
}

export async function getStaticPaths () {
    
    const respuesta = await fetch(`${process.env.API_URL}/ejercicios`)
    const {data} = await respuesta.json()

    const paths = data.map(ejercicio => ({
        params : {
            url: ejercicio.attributes.url
        }
    }))


    return {
        paths,
        fallback: false
    }

}


export async function getStaticProps({params: {url}}) {


    const respuesta = await fetch(`${process.env.API_URL}/ejercicios?filters[url]=${url}&populate=imagen`)
    const {data: ejercicios} = await respuesta.json()

    
    return {
        props: {
            ejercicios
        }
    }
}
