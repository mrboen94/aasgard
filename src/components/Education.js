import React from "react";
import styled from "styled-components";
import { EducationCard } from "./sub-components";
import data from "./Data/data";
import StyledText from "./StyledText";

const Wrapper = styled.div`
  min-height: 150px;
  padding-bottom: 12px;
  padding-top: 12px;
  border-bottom: 2px solid;
`;

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: columns;
`;

const education = data.education;

export default function Education() {
  return (
    <Wrapper>
      <StyledText h1 b>
        Education:
      </StyledText>
      <StyledDiv>
        {education.slice(0, 2).map((data) => (
          <EducationCard
            key={data.id}
            title={data.title}
            school={data.school}
            description={data.description}
          />
        ))}
      </StyledDiv>
    </Wrapper>
  );
}
