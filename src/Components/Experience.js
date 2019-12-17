import React from "react";
import styled from "styled-components";
import { ExperienceCard } from "./SubComponents";
import { StyledText } from "./SubComponents"

const StyledDiv = styled.div`
  background-color: #ffffff;
`;

export default function Experience() {
  return (
    <StyledDiv>
      <StyledText h1 b>Experience:</StyledText>
      <ExperienceCard />
    </StyledDiv>
  );
}