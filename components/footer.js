import Image from "next/future/image"
import Link from "next/link"

export default function Footer() {
  return (
   
    <footer className="bg-gradient-to-r from-orange2-50 via-gray-500 to-white pt-8 pb-6 w-full bottom-0 left-0 right-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Encuentranos en Instagram y Whatsapp!!!</h4>

            <div className="mt-6 lg:mb-0 mb-6">

              <button className="text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <Image src="/instagram2.png" width={200} height={200} className="w-10 h-10" alt="instagram"/>
                </button>
                <button className="text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <Image src="/whatsapp2.png" width={200} height={200} className="w-10 h-10" alt="whatsapp"/>
                </button>

            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-lg font-bold mb-2">Links</span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" href="/">Inicio</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" href="/rutinas">Rutinas</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" href="/nosotros">Nosotros</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" href="/tienda">Tienda</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-lg font-bold mb-2">Politicas</span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">Nuestras instalacion</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terminos y condiciones</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Reglamento</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300"/>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span><a href="" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Atenas Gym-Club by</a>
              <a href="https://github.com/Andrewsjjz" target="_blank" rel="noopener noreferrer" class="text-blueGray-500 hover:text-blueGray-800"> Andres Jimenez</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>


  )
}
