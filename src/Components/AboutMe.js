import React from "react";
import styled from "styled-components";
import { AboutMeBars } from "./SubComponents";
import { StyledText } from "./SubComponents";

const StyledDiv = styled.div`
  padding: 1em 1em 2em 0;
  background-color: #ffffff;
`;

export default function AboutMe() {
  return (
    <StyledDiv>
      <StyledText h1 b>
        About me:
      </StyledText>
      <StyledText p>
        Hello it's me, Mathias Bøe, welcome to my website, take a look around
        and get a feel of the place. Find the secret easter eggs, happy hunting!
      </StyledText>
      <AboutMeBars />
    </StyledDiv>
  );
}
