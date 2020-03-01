import React from "react";
import styled from "styled-components";
import StyledText from "./StyledText";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  border-bottom: 2px solid;
  padding-bottom: 2em;
  max-width: 50%;
`;

const Border = styled.div`
  margin: 0;
  max-width: 93%
  border-bottom: 2px solid;
`;

export default function EducationCard({ title, school, description }) {
  return (
    <StyledDiv>
      <StyledText h2 b>
        {title}
      </StyledText>
      <Border />
      <StyledText h3 b>
        {school}
      </StyledText>
      <StyledText p>{description}</StyledText>
    </StyledDiv>
  );
}
