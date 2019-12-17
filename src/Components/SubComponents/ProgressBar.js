import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  text-align: center;
  color: #fff;
`;

const StyledGrid = styled.div`
  display: flex;
  flex: 4 10 2;
  margin: 1em;
  justify-contents: left;
  height: 0px;
  padding-bottom: 26px;
`;

const StyledTextGrid = styled.div`
  width: 28%;
`;

const Tracker = styled.div`
    width 60%;
    height 20px;
    margin: 15px auto;
    background: repeating-linear-gradient(
        30deg,
        #fff 1px,
        #fff 4px,
        #2e2e2e 5px,
        #2e2e2e 10px
    );
    border-radius: 10px;
`;

const ProgressInTracker = styled.div`
    height: 100%;
    width: 100%
    background: linear-gradient(
        90deg,
        #2e2e2e ${props => props.percentage},
        transparent ${props => props.percentage}
    );
    border-radius: 10px 0 0 10px;
`;

export default function ProgressBar({ percentage, skill }) {
  return (
    <StyledGrid>
      <StyledTextGrid>
        <p>
          <b>{skill}</b>
        </p>
      </StyledTextGrid>
      <Tracker>
        <ProgressInTracker percentage={percentage} />
      </Tracker>
      <p>
        <b>{percentage}</b>
      </p>
    </StyledGrid>
  );
}
