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

export default function Info() {
  return (
      <StyledDiv>
        <h3>About me:</h3>
        <p><b>Born:</b> 14.09.1994</p>
        <p><b>Nationality:</b> Norwegian</p>
        <p><b>Languages:</b> Norwegian, English</p>
      </StyledDiv>
  );
}