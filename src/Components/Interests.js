import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    border-bottom: 2px solid;
    padding-left 12px;
`;

export default function Interests() {
  return (
    <StyledDiv>
      <h3>Insterests:</h3>
      <p>Programming</p>
      <p>Photography</p>
      <p>Graphical Design</p>
      <p>Bouldering</p>
      <p>Gymnastics / Parkour</p>
    </StyledDiv>
  );
}
