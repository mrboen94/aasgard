import React from "react";
import styled from "styled-components";
import { AboutMeBars } from "./SubComponents";

const StyledDiv = styled.div`
  padding: 1em 1em 2em 0;
  background-color: #ffffff;
  height: 100vh;
`;

export default function AboutMe() {
  return (
    <StyledDiv>
        <h1>
          Mathias Bøe
        </h1>
        <h2>About Me:</h2>
        <p>Im a ya boi, a nerd lorem hipsum schmipzum zzzzzzzzzzz zzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzz zzzzzzzz z zzzzzzzz zzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzz zzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
          zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
          zzzzzzzzzzzzzzzzzzzzzzzzz
        </p>
          <AboutMeBars />
    </StyledDiv>
  );
}