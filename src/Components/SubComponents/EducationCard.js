import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: rows;
   max-width 50%;
`;

export default function EducationCard({ title, school, description }) {
  return (
    <StyledDiv>
      <h2>{title}</h2>
      <h3>{school}</h3>
      <p>{description}</p>
    </StyledDiv>
  );
}
