import React from "react";
import styled from "styled-components";
import { Info, ImageWrapper, Interests, Contact, Socials } from "../";

const StyledDiv = styled.div`
  padding: 1em;
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
        <FlexDiv>
          <h1>Contact:</h1>
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
