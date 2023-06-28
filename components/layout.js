import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({children, title = '', description = ''}) {
  return (
    <div className="w-full">
        <Head>
            <title>Atenas Gym</title>
        </Head>
      <Header/>
      {children}
      <div className="flex w-full">
      <Footer/>
      </div>
    </div>
  )
}
