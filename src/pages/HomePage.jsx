import { useEffect } from "react"

import Feedbacks from "../components/Feedbacks"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Product from "../components/Product"
import Use from "../components/Use"
import Videos from "../components/Videos"

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Product />
      <Videos />
      <Use />
      <Feedbacks />
      <Footer />
    </>
  )
}

export default HomePage
