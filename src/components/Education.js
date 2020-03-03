import React from "react";
import styled from "styled-components";
import { EducationCard } from "./sub-components";
import data from "./Data/data";
import StyledText from "./StyledText";

const Wrapper = styled.div`
  min-height: 220px;
  padding-bottom: 12px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: columns;
  padding-bottom: 12px;
`;

const Spacer = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
`;

const education = data.Education;
export default function Education() {
  return (
    <Wrapper>
      <Spacer>
        <StyledText h1 b>
          Education:
        </StyledText>
      </Spacer>
      <StyledDiv>
        {education.map(data => (
          <EducationCard
            key={data.id}
            title={data.Title}
            school={data.School}
            description={data.Description}
          />
        ))}
      </StyledDiv>
    </Wrapper>
  );
}
