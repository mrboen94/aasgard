import React from "react";
import styled from "styled-components";
import { ExperienceCard } from "./SubComponents";

const StyledDiv = styled.div`
  padding: 1em;
  background-color: #ffffff;
  height: 100vh;
`;

export default function Experience() {
  return (
    <StyledDiv>
      <ExperienceCard />
        <hr />
    </StyledDiv>
  );
}