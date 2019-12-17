import React from "react";
import styled from "styled-components";
import { AboutMe, Experience, Education, Knowledge } from "../";

const StyledDiv = styled.div`
  padding: 2em;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 700px;
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