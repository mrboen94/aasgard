import React from "react";
import styled from "styled-components";
import { AboutMeBars } from "./sub-components";
import { StyledText } from "./";

const StyledDiv = styled.div`
  padding: 1em 1em 2em 0;
  background-color: #ffffff;
`;

const PaddingWrapper = styled.div`
  padding-bottom: 12px;
`;

export default function AboutMe() {
  return (
    <StyledDiv>
      <PaddingWrapper>
        <StyledText h1 b>
          Mathias Bøe
        </StyledText>
      </PaddingWrapper>
      <PaddingWrapper>
        <StyledText h1 b>
          About me:
        </StyledText>
      </PaddingWrapper>
      <StyledText p>
        Hello it's me, Mathias Bøe, welcome to my website, take a look around
        and get a feel of the place. Find the secret easter eggs, happy hunting!
      </StyledText>
      <AboutMeBars />
    </StyledDiv>
  );
}
