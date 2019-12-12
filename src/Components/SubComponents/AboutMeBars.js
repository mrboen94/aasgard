import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const StyledProgressBar = styled.div`
  width: 100%
  justify-content: center;
  margin: 0 auto;
`;

export default function AboutMeBars() {
  return (
    <StyledProgressBar> 
        <ProgressBar percentage={"75%"} skill={"COMMUNICATION"} />
        <ProgressBar percentage={"80%"} skill={"CREATIVITY"} />
        <ProgressBar percentage={"75%"} skill={"TEAMWORK"} />
        <ProgressBar percentage={"90%"} skill={"LEADERSHIP"} />
        <ProgressBar percentage={"60%"} skill={"ORGANISATIONAL WORK"} />
    </StyledProgressBar>
  );
}