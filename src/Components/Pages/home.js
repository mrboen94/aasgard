import React from "react";
import styled from "styled-components";
import { AboutMe, Experience, Education, Knowledge } from "../";

const StyledDiv = styled.div`
  padding: 1em;
  background-color: #ffffff;
  height: 95vh;
  display: flex;
  flex-direction: column;
`;

export default function HomeBody() {
  return (
    <StyledDiv>
      <AboutMe />
      <Experience />
      <Education />
      <Knowledge />
    </StyledDiv>
  );
}