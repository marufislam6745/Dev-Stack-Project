import { Suspense, useState } from "react"
import { Banner } from "./Component/Banner"
import { Nav } from "./Component/Nav"
import Technologys from "./Technologys"
import  type {Technologytype}  from "./Technology"
import { Footer } from "./Component/Footer"

const technologyFetch = async ():Promise<Technologytype[]> => {
  const res = await fetch("./data.json")
  const data = await res.json()
  return data
}

function App() {
  const [technologyPromise] = useState(()=>technologyFetch())



  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Technologys technologyPromise={technologyPromise}></Technologys>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
