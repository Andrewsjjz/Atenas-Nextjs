import {useState} from 'react'
import Image from 'next/future/image'
import Link from 'next/link'

export default function Header() {
    let arr = [true, false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text, setText] = useState("");

    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }

    const setSelectedText = (txt) => {
        setText(txt);
        setDropDown(true);
    }
  return (
    <>

<div className="2xl:container 2xl:mx-auto block">
<div className="rounded shadow-lg py-5 px-7 bg-gradient-to-r from-orange2-50 via-gray-500 to-white">
    <nav className="flex justify-between">
        <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <svg className="cursor-pointer" width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z" fill="#1F2937" />
            </svg>
            <h2 className="font-normal text-2xl leading-6 text-gray-800">Atenas Gym</h2>
        </div>
        {/* Tamaño Mediano */}
        <ul className="hidden md:flex flex-auto space-x-2">

            <Link href='/'>
            <li onClick={()=>selected(0)} className={`${style[0] ? 'text-white bg-orange2-100' : 'text-gray-600 border border-white bg-gray-50'}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xl leading-3 
                shadow-md rounded`}>Inicio</li>
            </Link>

            <Link href='/rutinas'>
            <li onClick={()=>selected(1)} 
            className={`${style[1] ? 'text-white bg-orange2-100' : 'text-gray-600 border border-white bg-gray-50'} 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal 
            text-xl leading-3 shadow-md rounded`}>Rutinas</li>
            </Link>

            <Link href='/nosotros'>
            <li onClick={()=>selected(2)} className={`${style[2] ? 'text-white bg-orange2-100' : 'text-gray-600 border border-white bg-gray-50'} 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xl leading-3 shadow-md 
            rounded`}>Nosotros</li>
            </Link>

            <Link href='/tienda'>
            <li onClick={()=>selected(3)} className={`${style[3] ? 'text-white bg-orange2-100' : 'text-gray-600 border border-white bg-gray-50'} 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xl leading-3 shadow-md 
            rounded`}>Tienda</li>
            
            </Link>
        </ul>
        <div className=" flex space-x-5 justify-center items-center pl-2">
            <button>
            <Link href='/carrito'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        </Link>
            </button>


        </div>
    </nav>

    {/* Tamaño pequeño */}
    <div className="block md:hidden w-full mt-5 ">
        <div onClick={()=>setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-orange-300 rounded flex justify-between items-center w-full">
            <div className="flex space-x-2">
                <span id="s1" className={`${text.length != 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none cursor-pointer text-black">{text ? text : "Menu"}</p>
            </div>
            <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            
        </div>
        <div className=" relative">
            <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
            <Link href='/'>
            <li onClick={()=>selected(0)} className={`${style[0] ? 'text-white bg-orange2-100' : 'text-gray-600 border border-white bg-gray-50'}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xl leading-3 
                shadow-md rounded`}>Inicio</li>
            </Link>

            <Link href='/rutinas'>
            <li onClick={()=>selected(1)} 
            className={`${style[1] ? 'text-white bg-orange2-100' : 'text-gray-600 border border-white bg-gray-50'} 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal 
            text-xl leading-3 shadow-md rounded`}>Rutinas</li>
            </Link>

            <Link href='/nosotros'>
            <li onClick={()=>selected(2)} className={`${style[2] ? 'text-white bg-orange2-100' : 'text-gray-600 border border-white bg-gray-50'} 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xl leading-3 shadow-md 
            rounded`}>Nosotros</li>
            </Link>

            <Link href='/tienda'>
            <li onClick={()=>selected(3)} className={`${style[3] ? 'text-white bg-orange2-100' : 'text-gray-600 border border-white bg-gray-50'} 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xl leading-3 shadow-md 
            rounded`}>Tienda</li>
            
            </Link>
            </ul>
        </div>
    </div>
</div>
        </div>

    </>
  )
}
