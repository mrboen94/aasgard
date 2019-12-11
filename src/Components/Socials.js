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

export default function Socials() {
  return (
      <StyledDiv>
        <h3>Socials:</h3>
        <p>Facebook</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </StyledDiv>
  );
}