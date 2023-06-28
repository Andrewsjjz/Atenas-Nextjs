
import Layout from "../components/layout"
import ListadoProductos from '../components/listado-productos'
import usePersonas from "../hooks/usePersonas"
import Cargando from "../components/cargando"

export default function Tienda({suplementos}) {




  return (
          <>
    <Layout>
      <main>
      <h1 className='text-3xl text-center mt-10 font-bold uppercase'>
      Nuestra coleccion de articulos para tu entrenamiento
      </h1>

      <div className='mt-12 flex flex-wrap mb-12'>

        {suplementos.length && (
          <div className="grid gap-20 grid-cols-1 md:grid-cols-3">
            {suplementos.map( suplemento => (
              <ListadoProductos
              key={suplemento.id}
              suplemento={suplemento.attributes}
              />
            ))}
          </div>
        )}

      </div>

      </main>
    </Layout>

    </>

  )
}

//Este metodo sirve para consultar api y la informacion no cambia con el tiempo

// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/suplementos?populate=imagen`)
//   const {data: suplementos} = await respuesta.json()
//   return {
//     props: {
//       suplementos
//     }
//   }
  
// }

// fin


//Este metodo sirve para cuando cambian de manera constante 

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/suplementos?populate=imagen`)
  const {data: suplementos} = await respuesta.json()
  return {
    props: {
      suplementos
    }
  }
  
}