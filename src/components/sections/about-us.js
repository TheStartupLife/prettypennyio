import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Section, Container } from "../global"

const About = () => {

    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "avatar.webp" }) {
          childImageSharp {
            gatsbyImageData(width: 1000, placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
    `);
    
  
    const image = getImage(data.file.childImageSharp)

  return (
  <Section id="about-us">
    <StyledContainer>
      <Subtitle>Founder</Subtitle>
      <SectionTitle>Whitney Lubin</SectionTitle>
      <AboutImage image={image} alt="Whitney Lubin avatar" />
    </StyledContainer>
  </Section>
)
}
export default About

const StyledContainer = styled(Container)`
  display: block;
  place-items: center;
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const AboutImage = styled(GatsbyImage)`
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Makes it round */
  object-fit: cover;
  margin: 0 auto; /* Centers the image */
  display: block; /* Ensures it aligns properly */
  place-items: center; /* Centers the image */
`