import React from "react";
import styled from "styled-components";
import StyledText from "../SubComponents/StyledText";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 12px;
  width: 100%
  border: 2px solid;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledDiv>
      <StyledText p center b>
        HOME
      </StyledText>
      <StyledText p center b>
        PROJECTS
      </StyledText>
      <StyledText p center b>
        MISC
      </StyledText>
    </StyledDiv>
  );
}
