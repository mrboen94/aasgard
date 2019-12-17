import React from "react";
import styled from "styled-components";
import { KnowledgeCard } from "./SubComponents";
import { StyledText } from "./SubComponents";
import data from "./Data/data.json";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
`;

const knowledge = data.Knowledge;

export default function Knowledge() {
  return (
    <>
      <StyledText h1 b>Knowledge:</StyledText>
      <StyledDiv>
        {knowledge.map(data => (
        <KnowledgeCard skill={data.Title} percentage={data.Percent} /> 
        ))}
      </StyledDiv>
    </>
  );
}