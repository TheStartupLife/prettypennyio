import React from "react"
import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import Contact from "../components/sections/contact-form"


const ContactUsPage = () => (


  <Layout>
    <Seo title="Contact Us" />
    <Navigation />
    <Contact/>
    <Footer />
  </Layout>
)

export default ContactUsPage
