import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 1em;
  background-color: #ffffff;
  height: 100vh;
`;

export default function HomeBody() {
  return (
    <StyledDiv>
        <h1>
          This is the HomeBody text...
        </h1>
    </StyledDiv>
  );
}