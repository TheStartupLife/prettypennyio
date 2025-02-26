import React from "react";
import styled from "styled-components";

import { Container, Section } from "../global";

const GetStarted = () => (
  <StyledSection>
    <GetStartedContainer>
      <GetStartedTitle>Be the first to get the beta</GetStartedTitle>
    </GetStartedContainer>
    <Container>
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
          placeholder="Your email"
          name="email"
          id="email"
          required
        />
        <TryItButton type="submit">Early access</TryItButton>
      </HeaderForm>
    </Container>
  </StyledSection>
);

export default GetStarted;

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`;

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`;

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`;

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
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
`;

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`;

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

  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
  }
`;
