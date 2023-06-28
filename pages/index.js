
import Layout from '../components/layout';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import fondo from '../public/fondo.avif'
import gym from '../public/gym.jpg'




export default function Home() {

return (
<Layout>


<div
  className="relative z-[-1] bg-[url(https://img.freepik.com/fotos-premium/equipos-gimnasio-gimnasio_23-2147949744.jpg?w=740)] brightness-100 bg-cover bg-center bg-no-repeat"
>

  <div
    className="absolute inset-0 bg-gradient-to-r from-slate-100 to-orange2-50 opacity-50"
  >

  </div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-normal sm:text-5xl text-black">
        ¿No sabes donde entrenar en Punta Gorda?

        <p className="mt-5 block font-extrabold text-black">
          Te invitamos a Atenas Gym-Club
        </p>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white font-bold">

      </p>

    </div>
  </div>


</div> 

<div 
  className="relative bg-[url(https://img.freepik.com/vector-gratis/campo-baloncesto-area-entrenamiento_88138-164.jpg?w=740&t=st=1687959955~exp=1687960555~hmac=6370092689cca2090749a643f01e6070069de9b7f776a1ad400f9e1287f78598)] bg-cover bg-center bg-no-repeat"
  >
    <div
    className="absolute inset-0 bg-gradient-to-r from-slate-100 to-orange2-50 opacity-50"
  >

  </div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-normal sm:text-5xl text-black">
        ¿Quieres jugar ping-pong o practicar basquet?

        <p className="mt-5 block font-extrabold text-black">
          En Atenas Gym-club tenemos una cancha para que practiques tus deportes
        </p>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white font-bold">

      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

  </div>

  <div 
  className="relative bg-[url(https://img.freepik.com/fotos-premium/suplementos-culturismo-deportivo-o-nutricion-fitness-o-concepto-estilo-vida-saludable-proteina-suero-mancuernas-coctelera-ilustracion-3d_505080-892.jpg?w=996)] bg-cover bg-center bg-no-repeat"
  >
    <div
    className="absolute inset-0 bg-gradient-to-r from-slate-100 to-orange2-50 opacity-50"
  >

  </div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-normal sm:text-5xl text-black">
        ¿Necesitas suplementos para tus entrenamientos u otros accesorios?

        <p className="mt-5 block font-extrabold text-black">
          En Atenas Gym-club contamos con una tienda para que compres lo que necesites
        </p>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white font-bold">

      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

  </div>

  <div 
  className="relative bg-[url(https://img.freepik.com/foto-gratis/pareja-entrenando-juntos-gimnasio_1303-25232.jpg?w=740&t=st=1687960088~exp=1687960688~hmac=f4d664c1894f808b9f94f8312edd83365b11f75a58e416f187edd180df312ab2)] bg-cover bg-center bg-no-repeat"
  >
    <div
    className="absolute inset-0 bg-gradient-to-r from-slate-100 to-orange2-50 opacity-50"
  >

  </div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-normal sm:text-5xl text-black">
        ¿No sabes que ejercicio o cual musculo comenzar?

        <p className="mt-5 block font-extrabold text-black">
          En Atenas Gym-club contamos con entrenadores y rutinas para lograr tus objetivos
        </p>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white font-bold">

      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

  </div>
</Layout>




      )
 }
{/* */}
