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
          Mathias Bøe
        </StyledText>
        <StyledText h2>About Me:</StyledText>
        <StyledText p>Im a ya boi, a nerd lorem hipsum schmipzum zzzzzzzzzzz zzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzz zzzzzzzz z zzzzzzzz zzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzz zzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
          zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
          zzzzzzzzzzzzzzzzzzzzzzzzz
        </StyledText>
          <AboutMeBars />
    </StyledDiv>
  );
}