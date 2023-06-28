import { useState } from "react";
import Image from "next/future/image";
import Layout from "../../components/layout";


export default function SuplementoSeleccionado({suplementos, agregarCarrito}) {
    const [show, setShow] = useState(false);
    const [cantidad, setCantidad] = useState(0)


    const {nombre, descripcion, precio, imagen} = suplementos[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1) {
            alert('Cantidad no válida')
            return
        }

        const productoSeleccionado = {
            id: suplementos[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(productoSeleccionado)
    }



  return (
    <>
    <Layout
    >
<div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
<div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">

<Image 
className="" 
alt="producto"
width={250}
height={300}
src={imagen.data.attributes.url} />

</div>
<div className="md:hidden flex justify-center">

<Image 
className="" 
alt="producto"
width={250}
height={300}
src={imagen.data.attributes.url} />

<div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
</div>
</div>
<div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
<div className="border-b border-gray-200 pb-6">
    <h1
        className="
            lg:text-2xl
            text-xl
            font-semibold
            lg:leading-6
            leading-7
            text-gray-800
            mt-2
        "
    >
        {nombre}
    </h1>
</div>

<div className="py-4 border-b border-gray-200 flex items-center justify-between">
    <p className="text-base leading-4 text-gray-800"></p>
    <div className="flex items-center justify-center">
        <p className="text-2xl leading-none text-black font-bold mr-3">$ {precio}</p>

    </div>

</div>


<form 
onSubmit={handleSubmit}
>
    <div className="flex justify-center">
    <select 
onChange={e => setCantidad(+e.target.value)}
class="py-3 px-4 pr-9 mt-5  border-gray-200 rounded-md text-sm 
focus:border-orange-500 focus:ring-orange-500 dark:bg-white dark:border-orange-700 dark:text-black">
  <option value="0">Seleccione la cantidad</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
    </div>


<div className="flex w-full mt-10">
<button
type="input"
class="bg-slate-900 flex w-full items-center justify-center rounded-md px-5 py-2.5 text-center text-sm 
font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-gray-700">
<svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    Añadir al carrito
</button>
</div>

    </form>



<div>
    <p 
    className="text-base text-justify lg:leading-tight leading-normal text-black mt-7 
    whitespace-pre-wrap whitespace-pre-wrap-moz 
    whitespace-pre-wrap-o">
    {descripcion}</p>
</div>
<div>
    <div className="border-t border-b py-4 mt-7 border-gray-200">
        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
            <p className="text-base leading-4 text-black font-extrabold">¿Como comprar con nosotros?</p>
            <button
                className="
                    cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                    rounded
                "
                aria-label="show or hide"
            >
                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
        </div>
    </div>
</div>
<div>
</div>
</div>
</div>

</Layout>
    </>
  )
}





export async function getStaticPaths () {
    
    const respuesta = await fetch(`${process.env.API_URL}/suplementos`)
    const {data} = await respuesta.json()

    const paths = data.map(suplemento => ({
        params : {
            url: suplemento.attributes.url
        }
    }))

    console.log(paths)

    return {
        paths,
        fallback: false
    }

}



export async function getStaticProps({params: {url}}) {


    const respuesta = await fetch(`${process.env.API_URL}/suplementos?filters[url]=${url}&populate=imagen`)
    const {data: suplementos} = await respuesta.json()

    
    return {
        props: {
            suplementos
        }
    }
}


// export async function getServerSideProps({query: {url}}) {

//     console.log(url)

//     const respuesta = await fetch(`${process.env.API_URL}/suplementos?filters[url]=cell-tech-2kg-1&populate=*`)
//     const {data: suplementos} = await respuesta.json()

    
//     return {
//         props: {
//             suplementos
//         }
//     }
// }