import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    border-bottom: 2px solid;
    padding-left 12px;
`;

const StyledLink = styled.a`
  color: black;
`;

export default function Contact() {
  return (
    <StyledDiv>
      <p>
        <b>Phone:</b> <StyledLink href="tel:48083332">480 83 332</StyledLink>
      </p>
      <p>
        <b>email: </b>
        <StyledLink href="mailto:mrboen94@gmail.com">
          mrboen94@gmail.com
        </StyledLink>
      </p>
      <p>
        <b>Location: </b>ask me
      </p>
    </StyledDiv>
  );
}
