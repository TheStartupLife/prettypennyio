import React from "react"
import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Navigation />
    <Header />
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
