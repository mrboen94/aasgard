import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  padding: 1em;
`;

export default function HomeBody() {
  return (
    <StyledDiv>
      <p>
        Welcome to my website, nothing much here yet, but suddently more stuff
        will appear...
      </p>
    </StyledDiv>
  );
}
