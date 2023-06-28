import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {

const [total, setTotal] = useState(0)

useEffect(() => {
  const calcularTotal = carrito.reduce ( (total, producto) => total + (producto.cantidad * producto.precio), 0 )
  setTotal(calcularTotal)
}, [carrito])

const {nombre} = carrito


function FormatearDinero (calcularTotal) {
  return calcularTotal.toLocaleString ("en-US", {
      sytle: "currency",
      currency: "USD",
  })
}


  return (
    <Layout>


      <h1 class="mb-10 text-center text-2xl font-bold"></h1>

      <div class="container mx-auto mt-10 w-full">
    <div class="md:flex items-start justify-center shadow-md my-10">
      <div class="bg-white px-10 py-10 w-full">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Carrito de compras</h1>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalles del producto</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Cantidad</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Precio</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Subtotal</h3>
        </div>

        <p>{carrito.nombre}</p>

        {carrito.length === 0 ? 'Carrito vacio' : (
          carrito.map(producto => (
            <div
            key={producto.id}
            >

      <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <Image class="h-24" src={producto.imagen} alt="Imagen del producto" width={200} height={300}/>
            </div>
            <div class="flex flex-col items-center justify-center ml-4 flex-grow">
              <span class="font-bold text-xl max-sm:text-sm">{producto.nombre}</span>
              <button
              onClick={() => eliminarProducto(producto.id)}
              class=" mt-12 font-semibold justify-start hover:text-red-500 text-gray-500 text-xs"
              >
                Eliminar
              </button>

            </div>
          </div>
          <div class="flex justify-center w-1/5">

          <select 
          onChange={e => actualizarCantidad({
            id: producto.id,
            cantidad: e.target.value
          })}
          class="py-1 px-2 pr-3 mt-5 border-gray-200 rounded-md text-xl max-sm:text-sm
          focus:border-orange-500 focus:ring-orange-500 dark:bg-white dark:border-orange-700 
          dark:text-black"
          value={producto.cantidad}
          >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
</select>

          </div>
          <span class="text-center w-1/5 font-semibold text-xl max-sm:text-sm">$ {producto.precio}</span>
          <span class="text-center w-1/5 font-semibold text-xl max-sm:text-sm">$ {FormatearDinero(producto.precio * producto.cantidad)}</span>
        </div>

        </div>
        
            
          ))
        )}


<Link href="/tienda">
<a class="flex font-semibold text-orange2-50 text-sm mt-10">
      
      <svg class="fill-current mr-2 text-orange2-50 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
      Continua comprando
    </a>
</Link>

      </div>

      <div id="summary" class="max-sm:w-full w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Orden</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-xl uppercase">Total a pagar: </span>
          <span class="font-bold text-xl">${FormatearDinero(total)}</span>
        </div>


        <div class="border-t mt-8">
        <button class="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
    <a href={`https://wa.me/584121635088?text=Hola,%20deseo%20informacion%20acerca%20de%20estos%20productos%20${carrito.nombre}%20`}
    class="group flex w-full items-center justify-center rounded py-1 text-center font-bold" target="_blank" rel="noopener noreferrer"> Shop now </a>
    <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
        </div>
      </div>

    </div>
  </div>
    </Layout>
  )
}
        