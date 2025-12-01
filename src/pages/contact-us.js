import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import { Container } from "../components/global"

const ContactUsPage = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Navigation />

    <PageHeader>
      <Container>
        <h1>Get in Touch</h1>
        <p>Have questions? We'd love to hear from you.</p>
      </Container>
    </PageHeader>

    <FormSection>
      <Container>
        <FormCard>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <InputGroup>
              <label htmlFor="name">Name</label>
              <Input type="text" name="name" id="name" required />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <Input type="email" name="email" id="email" required />
            </InputGroup>
            <InputGroup>
              <label htmlFor="message">Message</label>
              <TextArea name="message" id="message" rows="5" required />
            </InputGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        </FormCard>
      </Container>
    </FormSection>

    <Footer />
  </Layout>
)

export default ContactUsPage

const PageHeader = styled.section`
  padding: 180px 0 100px;
  background: ${props => props.theme.color.ppHeroGradient};
  text-align: center;
  color: white;

  h1 {
    font-size: 56px;
    font-weight: 800;
    margin-bottom: 24px;
  }

  p {
    font-size: 24px;
    opacity: 0.9;
  }
`

const FormSection = styled.section`
  padding: 80px 0 120px;
  background: ${props => props.theme.color.ppSurface};
  margin-top: -60px; /* Overlap effect */
`

const FormCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 48px;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(76, 28, 96, 0.05);
  border: 1px solid ${props => props.theme.color.ppGlassBorder};

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 32px;
  }
`

const InputGroup = styled.div`
  margin-bottom: 24px;

  label {
    display: block;
    margin-bottom: 8px;
    color: ${props => props.theme.color.ppDeep};
    font-weight: 700;
    font-size: 16px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #eee;
  background: ${props => props.theme.color.ppSurface};
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${props => props.theme.color.ppPrimary};
    box-shadow: 0 0 0 3px rgba(231, 47, 130, 0.1);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #eee;
  background: ${props => props.theme.color.ppSurface};
  font-size: 16px;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${props => props.theme.color.ppPrimary};
    box-shadow: 0 0 0 3px rgba(231, 47, 130, 0.1);
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${props => props.theme.color.ppAccentGradient};
  color: white;
  font-weight: 700;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(231, 47, 130, 0.2);
  }
`
