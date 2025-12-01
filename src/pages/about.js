import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import { Container } from "../components/global"

const AboutPage = () => (
  <Layout>
    <Seo title="About Us" />
    <Navigation />

    <PageHeader>
      <Container>
        <h1>Our Story</h1>
        <p>We believe beauty and financial wellness should go hand in hand.</p>
      </Container>
    </PageHeader>

    <ContentSection>
      <Container>
        <ContentGrid>
          <TextBlock>
            <h2>Empowering your financial future</h2>
            <p>
              PrettyPenny was founded on a simple idea: the money you spend on self-care shouldn't just disappear.
              It should work for you. We're building a platform that turns your beauty and wellness routines into
              a powerful engine for financial growth.
            </p>
            <p>
              By earning cashback on the products and services you love, and automatically investing those rewards,
              we help you build a portfolio without changing your lifestyle.
            </p>
          </TextBlock>
          <ImageBlock>
            {/* Placeholder for a team or brand image */}
            <div style={{ width: '100%', height: '100%', background: 'rgba(231, 47, 130, 0.1)', borderRadius: '32px' }}></div>
          </ImageBlock>
        </ContentGrid>
      </Container>
    </ContentSection>

    <Footer />
  </Layout>
)

export default AboutPage

const PageHeader = styled.section`
  padding: 180px 0 100px;
  background: ${props => props.theme.color.ppHeroGradient};
  text-align: center;
  color: white;

  h1 {
    font-size: 56px;
    font-weight: 800;
    margin-bottom: 24px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  p {
    font-size: 24px;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.9;
  }
`

const ContentSection = styled.section`
  padding: 100px 0;
  background: ${props => props.theme.color.ppSurface};
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`

const TextBlock = styled.div`
  h2 {
    color: ${props => props.theme.color.ppDeep};
    font-size: 36px;
    margin-bottom: 32px;
    font-weight: 700;
  }

  p {
    color: ${props => props.theme.color.ppText};
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 24px;
  }
`

const ImageBlock = styled.div`
  height: 400px;
  background: white;
  border-radius: 32px;
  padding: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
`
