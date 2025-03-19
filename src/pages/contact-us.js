import React from "react";
import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import Navigation from "../components/common/navigation/navigation";
import Footer from "../components/sections/footer";
import Contact from "../components/sections/contact-form";

// Debugging: Ensure Gatsby loads environment variables
console.log("process.env.GATSBY_RECAPTCHA_SITE_KEY:", process.env.GATSBY_RECAPTCHA_SITE_KEY);

const ContactUsPage = () => {
  const siteKey = process.env.GATSBY_RECAPTCHA_SITE_KEY;

  // Debugging: Check if siteKey is loaded properly
  console.log("Contact Us - reCAPTCHA Site Key:", siteKey);

  return (
    <Layout>
      <SEO title="Home" />
      <Navigation />
      {/* ✅ Pass siteKey correctly */}
      <Contact siteKey={siteKey} />
      <Footer />
    </Layout>
  );
};

export default ContactUsPage;
