import React from "react";
import styled from "styled-components";

const Contact = () => {

  return (
    <ContactSection>
      <section>
        <h2>Contact Us</h2>
        <p>Have a question? Reach out to us via our Google Form.</p>
        <a 
          href="https://forms.gle/JhNEsUT1LKSsvGQ8A" 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "15px 25px",
            fontSize: "18px",
            backgroundColor: "#5c67f2",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "5px",
            marginTop: "20px"
          }}>
          Fill Out the Contact Form
        </a>
      </section>
      <p>Or email us directly at <a href="mailto:team@prettypenny.io">team@prettypenny.io</a></p>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
`;
