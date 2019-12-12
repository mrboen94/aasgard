import React from "react";
import styled from "styled-components";
import { AboutMe, Experience, Education, Knowledge } from "../";

const StyledDiv = styled.div`
  padding: 1em;
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
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