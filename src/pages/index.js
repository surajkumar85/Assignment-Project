import * as React from "react"
import "../style/index.css"
import "../style/Media.css"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/hero"
import Services from "../components/Services/Services"
import Inovative from "../components/Inovative/Inovative"
import Doctors from "../components/Doctors/Doctors"
import Testimonials from "../components/Testimonials/Testimonials"
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <div className="home">
    <Navbar />
    <Hero />
    <Services />
    <Inovative />
    <Doctors />
    <Testimonials />
    <Newsletter />
    <Footer />
  </div>
)

export default IndexPage
