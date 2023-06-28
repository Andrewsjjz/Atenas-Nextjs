import Layout from "../components/layout"
import Image from "next/future/image"
import page404 from '../public/pesomuerto.png'
import Link from "next/link"

export default function Page404() {
  return (
    <Layout>
      <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div class="wf-ull lg:w-1/2">
            <p class="font-bold text-5xl text-blue-900 dark:text-orange2-50">404 error</p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Pagina no encontrada</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-700">Lo siento, la pagina que esta solicitando no esta disponible</p>

            <div class="flex items-center mt-6 gap-x-3">
                <Link
                href='/tienda'
                >
                <button 
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 
                bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-orange2-50 dark:bg-orange2-100 hover:bg-gray-100 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Ir a tienda</span>
                </button>
                </Link>

                <Link
                href='/'
                >
                <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 
                bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-orange-800 
                dark:bg-orange-700">
                    Ir al inicio
                </button>   
                </Link>

            </div>
        </div>

        <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <Image 
            class="w-full max-w-lg lg:mx-auto" 
            src={page404} 
            alt="aaa"
            width={300}
            height={300}
            />
        </div>
    </div>
    </Layout>
  )
}
