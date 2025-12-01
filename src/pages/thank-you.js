import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import { Container } from "../components/global"

const ThankYouPage = () => (
  <Layout>
    <Seo title="Thank You" />
    <Navigation />

    <MainSection>
      <Container>
        <Card>
          <Icon>✨</Icon>
          <h1>You're on the list!</h1>
          <p>
            Thanks for joining the PrettyPenny waitlist. We'll be in touch soon with exclusive updates.
          </p>
          <HomeButton href="/">Back to Home</HomeButton>
        </Card>
      </Container>
    </MainSection>

    <Footer />
  </Layout>
)

export default ThankYouPage

const MainSection = styled.section`
  padding: 180px 0 100px;
  background: ${props => props.theme.color.ppHeroGradient};
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  padding: 64px 40px;
  border-radius: 32px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);

  h1 {
    color: ${props => props.theme.color.ppPrimary};
    font-size: 42px;
    margin-bottom: 24px;
    font-weight: 800;
  }

  p {
    color: ${props => props.theme.color.ppText};
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 40px;
  }
`

const Icon = styled.div`
  font-size: 64px;
  margin-bottom: 24px;
`

const HomeButton = styled.a`
  display: inline-block;
  padding: 16px 48px;
  background: ${props => props.theme.color.ppAccentGradient};
  color: white;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(231, 47, 130, 0.2);
  }
`
