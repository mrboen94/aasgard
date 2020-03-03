import React from "react";
import styled from "styled-components";
import { KnowledgeCard } from "./sub-components";
import { StyledText } from "./";
import data from "./Data/data.json";

const Wrapper = styled.div`
  min-height: 220px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
`;

const knowledge = data.Knowledge;

export default function Knowledge() {
  return (
    <Wrapper>
      <StyledText h1 b>
        Knowledge:
      </StyledText>
      <StyledDiv>
        {knowledge.map(data => (
          <KnowledgeCard
            skill={data.Title}
            percentage={data.Percent}
            key={data.id}
          />
        ))}
      </StyledDiv>
    </Wrapper>
  );
}
