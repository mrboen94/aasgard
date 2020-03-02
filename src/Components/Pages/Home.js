import React from "react";
import styled from "styled-components";
import { HomeBody } from "./";

const StyledDiv = styled.div`
  max-width: 700px;
`;

export default function Home() {
  return (
    <StyledDiv>
      <HomeBody />
    </StyledDiv>
  );
}
