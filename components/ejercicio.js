import Image from "next/future/image"
import Link from "next/link"

export default function Ejercicio({ejercicio}) {

const {nombre, imagen, url} = ejercicio

  return (
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex items-end justify-between">
    
    </div>
    
        <div class="overflow-hidden bg-white rounded shadow">
            <div class="p-5">
                <div class="relative">
                        <Image 
                        class="" 
                        src= {imagen.data.attributes.url}
                        alt="Imagen"
                        width={200}
                        height={200} 
                        className="w-full"
                        />
    
                    <div class="absolute top-4 left-4">
                    </div>
                </div>
                <p class="mt-5 text-2xl font-semibold text-black">
                 {nombre}
                </p>

                <Link href={`/ejercicios/${url}`}>
                    <button
                    class="inline-flex items-center justify-center 
                    pb-0.5 mt-5 text-base font-semibold text-orange-600 transition-all duration-200 
                    border-b-2 border-transparent hover:border-orange-700 focus:border-orange-600"
                    >
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    Continua leyendo
                    </button>

                </Link>

            </div>
        </div>

    </div> 
  )
}



