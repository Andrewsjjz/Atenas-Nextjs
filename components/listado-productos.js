import { useState, useEffect, createContext } from "react";
import Image from "next/future/image";
import Link from "next/link";

export default function ListadoProductos({suplemento}) {

  console.log(suplemento)
  const {nombre, descripcion, precio, imagen, url} = suplemento

  return (


    <div class="relative mx-auto w-full max-w-sm pt-6">
      <div class="relative inline-block w-full transform transition-transform duration-300 ease-in-out">
        <div class="rounded-lg">
          <div class="relative flex h-60 justify-center overflow-hidden rounded-lg">
            <div class="w-full flex justify-center mix-blend-color-burn transform transition-transform duration-500 ease-in-out hover:scale-110">
              <Image
              src={imagen.data.attributes.url}
              height={150}
              width={150}
              alt="IMg"
              className="w-44"
              />
            </div>
    
          </div>
    
          <div class="">
            <div class="mt-4 grid grid-cols-2">
              <div class="flex items-center">
                <div class="relative">
                  <h2 class="line-clamp-1 text-base font-medium text-gray-800 md:text-lg" title="New York">{nombre}</h2>
                </div>
              </div>
    
              <div class="flex items-center justify-end">
                <p class="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                  <span class="text-sm uppercase"> $ {precio}</span>
                </p>
              </div>
            </div>
    
            <div class="mt-2 border-t border-gray-200 pt-3 whitespace-normal">
              <p 
              
              class="text whitespace-pre-wrap whitespace-pre-wrap-moz 
              whitespace-pre-wrap-o line-clamp-2 truncate">{descripcion}</p>
            </div>


<div className="mt-5">
  <Link href={`/suplementos/${url}`}>
  <button class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer 
  border-b-4 border-l-2 active:border-orange-300 active:shadow-none shadow-lg bg-gradient-to-tr 
  from-orange-600 to-orange-500 border-orange-700 text-white">
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
    <span class="relative text-black group-hover:text-white">Lo quiero</span>
  </button>
  </Link>

</div>


          </div>
        </div>
      </div>
    </div>

  )
}
