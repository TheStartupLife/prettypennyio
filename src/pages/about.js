import React from "react"
import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import AboutHeader from "../components/sections/about-header"
import Footer from "../components/sections/footer"
import About from "../components/sections/about-us"


const AboutPage = () => (
  <Layout>
    <Seo title="Home" />
    <Navigation />
    <AboutHeader />
    <About />
    <Footer />
  </Layout>
)

export default AboutPage
