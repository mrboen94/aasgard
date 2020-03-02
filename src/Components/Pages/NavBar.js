import React from "react";
import styled from "styled-components";
import { Info, ImageWrapper, Interests, Contact, Socials } from "../";
import { Header } from "../Pages";

const StyledDiv = styled.div`
  padding: 12px;
  background-color: #e2e2e2;
  height: 100%;
  min-height: 1200px;
  width 15em;
  margin-left: 0;
`;

const BackgroundDiv = styled.div`
  background-color: #e2e2e2;
  position: fixed;
  height: 100%;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export default function NavBar() {
  return (
    <div>
      <StyledDiv>
        <ImageWrapper />
        <Header />
        <FlexDiv>
          <Contact />
          <Info />
          <Interests />
          <Socials />
        </FlexDiv>
      </StyledDiv>
      <BackgroundDiv />
    </div>
  );
}
