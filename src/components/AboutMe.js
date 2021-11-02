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
        Hello it's me, Mathias Bøe, welcome to my web-hosted CV! I am a 26 year
        old developer graduated from UiB in 2020. I like fiddling with stuff, as
        you can probably tell by this CV; you can also take a look at some of my
        other <a href="https://www.aasgard.io/projects/">projects</a>. I am a
        social guy and always looking for new adventures.
      </StyledText>
      <AboutMeBars />
    </StyledDiv>
  );
}
