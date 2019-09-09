import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  padding: 1em;
`;

export default function HomeBody() {
  return (
    <StyledDiv>
      <p>This will hold the about information</p>
    </StyledDiv>
  );
}
