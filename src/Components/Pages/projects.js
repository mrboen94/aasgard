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
        Some of my projects can be found at{" "}
        <a href="https://github.com/mrboen94">my github.</a>
      </p>
    </StyledDiv>
  );
}
