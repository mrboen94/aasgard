import React from "react";
import styled from "styled-components";
import { PhoneOutline } from "./Assets";

const StyledDiv = styled.div`
    border-bottom: 2px solid;
    padding-left 12px;
`;

const StyledList = styled.ul`
  ul li:nth-child(1) {
    list-style-image: url(${PhoneOutline});
  }
`;

export default function Interests() {
  return (
      <StyledDiv>
        <h3>Insterests:</h3>
        <p>Programming</p>
        <p>Photography</p>
        <p>Graphical Design</p>
      </StyledDiv>
  );
}