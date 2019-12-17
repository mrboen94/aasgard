import React from "react";
import styled from "styled-components";

import ProgressBar from "./ProgressBar";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%
`;



export default function KnowledgeCard({ percentage, skill }) {
  return (
    <>
      <StyledDiv>
        <ProgressBar percentage={percentage} skill={skill}/>
      </StyledDiv>
  </>
  );
}
