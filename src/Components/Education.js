import React from "react";
import styled from "styled-components";
import { EducationCard } from "./SubComponents";
import data from "./Data/data";

const StyledDiv = styled.div`
  padding: 1em;
  background-color: #ffffff;
  height: 100vh;
`;

const education = data.Education;
export default function Education() {
  return (
    <StyledDiv>
      <h1>EDUCATION:</h1>
      {education.map(data => (
        <EducationCard
          title={data.Title}
          school={data.School}
          description={data.Description}
        />
      ))}
    </StyledDiv>
  );
}
