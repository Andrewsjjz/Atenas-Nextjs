import { useState, useEffect, createContext } from "react";
import axios from "axios";
import Cargando from "../components/cargando";

const PersonasContext = createContext()

const PersonasProvider = ({children}) => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products?limit=12"
        );
    
        setProductos(data);
      };
    
      fetchData();
    } catch (error) {
      console.log(error)

    } 

setTimeout(() =>{
  setCargando(false)

}, 5000)



  }, []);


    return(
        <PersonasContext.Provider
        value={{
          productos,
          setProductos,
          cargando,
          setCargando
        }}
    >
        {children}
    </PersonasContext.Provider>
    )

}

export {
    PersonasProvider
}

export default PersonasContext