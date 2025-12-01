import React from "react"
import styled, { keyframes } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import { Container } from "../components/global"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "product/green-skew.png" }) {
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Home" />
      <Navigation />

      {/* HERO SECTION */}
      <HeroSection>
        <GradientBackground />
        <OrganicShape1 />
        <OrganicShape2 />
        <OrganicShape3 />
        <Container>
          <HeroContent>
            <HeroText>
              {/* ANCHOR HERO COPY - DO NOT CHANGE */}
              <h1>Where beauty meets investing.</h1>
              <p>
                Cashback on beauty & wellness seamlessly powers your investment portfolio.
              </p>
              <FormWrapper>
                <HeaderForm
                  name="early-access"
                  method="post"
                  data-netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="early-access" />
                  <HeaderInput
                    type="email"
                    placeholder="Your email address"
                    name="email"
                    id="email"
                    required
                  />
                  <input type="hidden" name="redirect" value="/thank-you" />
                  <HeaderButton type="submit">Join Waitlist</HeaderButton>
                </HeaderForm>
                <PrivacyText>Early access only. No spam, ever.</PrivacyText>
              </FormWrapper>
            </HeroText>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* VALUE PROPS SECTION */}
      <ValueSection>
        <Container>
          <SectionHeader>
            <h3>Beauty that pays you back</h3>
            <p>Turn your self-care routine into a wealth-building engine.</p>
          </SectionHeader>
          <Grid>
            <GlassCard>
              <CardContent>
                <IconWrapper>💄</IconWrapper>
                <CardTitle>Beauty Purchases</CardTitle>
                <CardText>
                  Earn cashback on your favorite makeup, skincare, and haircare products.
                </CardText>
              </CardContent>
            </GlassCard>
            <GlassCard>
              <CardContent>
                <IconWrapper>💆‍♀️</IconWrapper>
                <CardTitle>Beauty Services</CardTitle>
                <CardText>
                  Get rewards for nails, brows, facials, waxing, and laser treatments.
                </CardText>
              </CardContent>
            </GlassCard>
            <GlassCard>
              <CardContent>
                <IconWrapper>📈</IconWrapper>
                <CardTitle>Portfolio Growth</CardTitle>
                <CardText>
                  Your cashback automatically funds your investment portfolio.
                </CardText>
              </CardContent>
            </GlassCard>
          </Grid>
        </Container>
      </ValueSection>

      {/* HOW IT WORKS SECTION */}
      <StepsSection>
        <Container>
          <StepsHeader>How it works</StepsHeader>
          <StepsGrid>
            <Step>
              <StepNumber>1</StepNumber>
              <h4>Shop or Book</h4>
              <p>Buy beauty products or book wellness services as you normally would.</p>
            </Step>
            <Step>
              <StepNumber>2</StepNumber>
              <h4>Earn Cashback</h4>
              <p>We automatically track your eligible spend and credit your account.</p>
            </Step>
            <Step>
              <StepNumber>3</StepNumber>
              <h4>Grow Portfolio</h4>
              <p>Watch your cashback turn into real investments for your future.</p>
            </Step>
          </StepsGrid>
        </Container>
      </StepsSection>

      {/* SECONDARY CTA */}
      <CTASection>
        <CTAOrganicShape />
        <Container>
          <CTAContent>
            <h3>Ready to make your routine pay you back?</h3>
            <CTAButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Join the Waitlist
            </CTAButton>
          </CTAContent>
        </Container>
      </CTASection>

      <Footer />
    </Layout>
  )
}

export default IndexPage

// ANIMATIONS
const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(10deg); }
  66% { transform: translate(-20px, 20px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`

const breathe = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

// STYLES

const HeroSection = styled.section`
  position: relative;
  padding: 200px 0 160px;
  overflow: hidden;
  background-color: ${props => props.theme.color.ppSurface};
  
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 140px 0 100px;
  }
`

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.color.ppHeroGradient};
  background-size: 300% 300%;
  animation: ${breathe} 15s ease infinite;
  opacity: 0.9;
  z-index: 0;
`

// Organic Blobs
const OrganicShape1 = styled.div`
  position: absolute;
  top: -10%;
  right: -10%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: ${float} 20s ease-in-out infinite;
  z-index: 0;
  filter: blur(60px);
  opacity: 0.7;
`

const OrganicShape2 = styled.div`
  position: absolute;
  bottom: 0%;
  left: -15%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(249, 223, 175, 0.3) 0%, rgba(249, 223, 175, 0) 70%);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: ${float} 25s ease-in-out infinite reverse;
  z-index: 0;
  filter: blur(50px);
  opacity: 0.6;
`

const OrganicShape3 = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(76, 28, 96, 0.1) 0%, rgba(76, 28, 96, 0) 70%);
  border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
  animation: ${float} 18s ease-in-out infinite;
  z-index: 0;
  filter: blur(40px);
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  text-align: center;
`

const HeroText = styled.div`
  max-width: 900px;

  h1 {
    margin-bottom: 32px;
    color: white;
    font-size: 72px; 
    line-height: 1.05;
    letter-spacing: -2px;
    font-weight: 800;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.2);
  }
  
  p {
    margin-bottom: 48px;
    font-size: 24px;
    line-height: 1.6;
    color: white;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 500;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3);
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 { font-size: 42px; }
    p { font-size: 18px; }
  }
`

const FormWrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
  background: ${props => props.theme.color.ppGlassSurface};
  padding: 10px;
  border-radius: 60px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${props => props.theme.color.ppGlassBorder};
  box-shadow: 0 20px 40px rgba(76, 28, 96, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 50px rgba(76, 28, 96, 0.2);
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    border-radius: 20px;
    padding: 20px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    gap: 16px;
  }
`

const HeaderInput = styled.input`
  flex: 1;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.color.ppDeep};
  line-height: 42px;
  text-align: left;
  height: 64px;
  border: none;
  background: transparent;
  padding: 0 32px;
  outline: none;
  
  &::placeholder {
    color: ${props => props.theme.color.ppDeep};
    opacity: 0.7;
    font-weight: 400;
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    height: 56px;
    background: rgba(255,255,255,0.4);
    border-radius: 12px;
    padding: 0 20px;
  }
`

const HeaderButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  color: white;
  height: 64px;
  cursor: pointer;
  background: ${props => props.theme.color.ppAccentGradient};
  background-size: 200% 200%;
  border-radius: 50px;
  padding: 0 48px;
  border: none;
  outline: none;
  white-space: nowrap;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 20px rgba(126, 217, 86, 0.3);

  &:hover {
    transform: scale(1.03);
    background-position: 100% 50%;
    box-shadow: 0 15px 30px rgba(126, 217, 86, 0.4);
  }
  
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
    border-radius: 12px;
    height: 56px;
  }
`

const PrivacyText = styled.p`
  && {
    font-size: 13px;
    color: white;
    margin: 16px 0 4px;
    opacity: 0.95;
    font-weight: 500;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3);
  }
`

const ValueSection = styled.section`
  padding: 120px 0;
  background: ${props => props.theme.color.ppSoftBlend};
`

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px;

  h3 {
    color: ${props => props.theme.color.ppDeep};
    font-size: 42px;
    margin-bottom: 24px;
    font-weight: 800;
    letter-spacing: -1px;
  }
  p {
    color: ${props => props.theme.color.ppText};
    font-size: 20px;
    line-height: 1.6;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`

const GlassCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 32px;
  border: 1px solid ${props => props.theme.color.ppGlassBorder};
  box-shadow: 0 20px 40px rgba(76, 28, 96, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  transform: translateY(0);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(76, 28, 96, 0.1);
    background: rgba(255, 255, 255, 0.95);
  }
`

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 48px 32px;
  text-align: center;
`

const IconWrapper = styled.div`
  font-size: 48px;
  margin-bottom: 32px;
  background: ${props => props.theme.color.ppSurface};
  width: 96px;
  height: 96px;
  line-height: 96px;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 20px rgba(231, 47, 130, 0.1);
  transition: transform 0.3s ease;
  border: 1px solid ${props => props.theme.color.ppGlassBorder};
  
  ${GlassCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`

const CardTitle = styled.h4`
  color: ${props => props.theme.color.ppPrimary};
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
`

const CardText = styled.p`
  color: ${props => props.theme.color.ppText};
  line-height: 1.6;
  font-size: 17px;
`

const StepsSection = styled.section`
  padding: 120px 0;
  background-color: #fff;
`

const StepsHeader = styled.h3`
  text-align: center;
  font-size: 36px;
  margin-bottom: 80px;
  color: ${props => props.theme.color.ppDeep};
  font-weight: 800;
`

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 24px;
    left: 15%;
    right: 15%;
    height: 2px;
    background: linear-gradient(90deg, #F7BDC4 0%, #E72F82 100%);
    z-index: 0;
    opacity: 0.2;
    
    @media (max-width: ${props => props.theme.screen.md}) {
      display: none;
    }
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const Step = styled.div`
  position: relative;
  z-index: 1;

  h4 {
    color: ${props => props.theme.color.ppPrimary};
    margin-bottom: 16px;
    font-size: 26px;
    font-weight: 700;
  }
  p {
    color: ${props => props.theme.color.ppText};
    font-size: 18px;
    line-height: 1.6;
  }
`

const StepNumber = styled.div`
  width: 56px;
  height: 56px;
  background: white;
  color: ${props => props.theme.color.ppPrimary};
  border: 2px solid ${props => props.theme.color.ppAccent};
  border-radius: 50%;
  font-size: 22px;
  font-weight: 800;
  line-height: 52px;
  margin: 0 auto 32px;
  box-shadow: 0 10px 20px rgba(231, 47, 130, 0.1);
`

const CTASection = styled.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.color.ppSoftBlend};
  text-align: center;
`

const CTAOrganicShape = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(231, 47, 130, 0.05) 0%, rgba(255,255,255,0) 70%);
  border-radius: 40%;
  animation: ${float} 30s linear infinite;
  z-index: 0;
`

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  
  h3 {
    color: ${props => props.theme.color.ppDeep};
    font-size: 42px;
    margin-bottom: 48px;
    font-weight: 800;
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    h3 { font-size: 32px; }
  }
`

const CTAButton = styled.button`
  font-weight: 700;
  font-size: 20px;
  color: white;
  height: 72px;
  cursor: pointer;
  background: ${props => props.theme.color.ppAccentGradient};
  border-radius: 50px;
  padding: 0 64px;
  border: none;
  outline: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(231, 47, 130, 0.2);

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 20px 40px rgba(231, 47, 130, 0.3);
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
    height: 64px;
    padding: 0 32px;
  }
`
