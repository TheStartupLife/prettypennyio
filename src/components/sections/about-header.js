import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Container } from "../global"

const AboutHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "product/green-skew.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1000, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  `);
  

  const image = getImage(data.file.childImageSharp)


  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>About Us</Subtitle>
            <h1>Our Story</h1>
            <p>
            At PrettyPenny, we’re building a new kind of company—lean, tech-driven, 
            and designed for impact. By leveraging automation and strategic partnerships, 
            we aim to create a scalable business that helps people save more, invest smarter, 
            and support small businesses—without unnecessary complexity. Our mission is to make 
            financial growth accessible to everyone. Whether you're reinvesting cashback, 
            supporting beauty entrepreneurs, or building long-term wealth, PrettyPenny empowers 
            you to make the most of every dollar. We believe that businesses can thrive without 
            traditional structures, and that technology can unlock new ways to create value—for 
            individuals and communities alike. Join us as we challenge the status quo and redefine 
            financial empowerment—one Pretty Penny at a time.
            </p>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage image={image} alt="Green Skew Product Image" />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default AboutHeader

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  p {
    margin-bottom: 24px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border: 1px solid ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;

  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  height: 60px;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border: none;
  outline: none;

  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(GatsbyImage)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
