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

export default function Contact() {
  return (
      <StyledDiv>
        <p><b>Phone:</b> 48083332</p>
        <p><b>email: </b>mrboen94@gmail.com</p>
        <p><b>Location: </b>ask me</p>
      </StyledDiv>
  );
}