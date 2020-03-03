import React from "react";
import styled from "styled-components";
import StyledText from "../StyledText";

const StyledGrid = styled.div`
  display: flex;
  flex: 4 10 2;
  margin: 1em 0 1em 0;
  justify-contents: left;
  height: 0px;
  padding-bottom: 26px;
`;

const StyledTextGrid = styled.div`
  width: 24%;
  margin-right: 1em;
`;

const Tracker = styled.div`
    width 60%;
    height 20px;
    margin: 2px auto;
    background: repeating-linear-gradient(
        30deg,
        #fff 1px,
        #fff 3px,
        #e2e2e2 4px,
        #e2e2e2 6px
    );
    border-radius: 10px;
`;

const ProgressInTracker = styled.div`
    height: 100%;
    width: 100%
    transform: 0s;
    background: linear-gradient(
        90deg,
        #2e2e2e ${props => props.percentage},
        transparent ${props => props.percentage}
    );
    border-radius: 10px 0 0 10px;
`;

export default function ProgressBar({ percentage, skill, visual }) {
  return (
    <StyledGrid>
      <StyledTextGrid>
        <StyledText p b>
          {skill}
        </StyledText>
      </StyledTextGrid>
      <Tracker>
        <ProgressInTracker percentage={percentage} />
      </Tracker>
      {visual && (
        <StyledText p b>
          {percentage}
        </StyledText>
      )}
    </StyledGrid>
  );
}
