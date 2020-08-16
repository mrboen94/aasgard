import React from "react";
import styled from "styled-components";
import { KnowledgeCard } from "./sub-components";
import { StyledText } from "./";
import data from "./Data/data.json";

const Wrapper = styled.div`
  margin-top: 12px;
  min-height: 220px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
`;

const knowledge = data.knowledge;

export default function Knowledge() {
  return (
    <Wrapper>
      <StyledText h1 b>
        Knowledge:
      </StyledText>
      <StyledDiv>
        {knowledge.map((data) => (
          <KnowledgeCard
            skill={data.title}
            percentage={data.percent}
            key={data.id}
          />
        ))}
      </StyledDiv>
    </Wrapper>
  );
}
