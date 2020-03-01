import React from "react";
import styled from "styled-components";
import data from "../Data/data.json";
import StyledText from "./StyledText";

const StyledDiv = styled.div`
  display: flex;
  flex: 10 5;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 2px solid;
`;

const StyledCols = styled.div`
  padding: 0px;
  display: flex;
  justify-content: left;
  width: 100%;
`;

const ArrowDiv = styled.div`
  padding-top: 20px;
  display: flex;
  height: 20px;
  height: 20px;
  width: 110px;
`;

const StyledYear = styled.div`
  background: #2e2e2e;
  width: 100px;
  height 24px;
  color: #fff;
  font-weight: bold;
  padding-left 12px;
`;

const StyledYearArrow = styled.div`
  background: transparent;
  border-left: 12px solid #2e2e2e;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
`;

const StyledBorderDiv = styled.div`
  margin-top: 23px;
  justify-content: left;
  padding-left: 3em;
  padding-right: 3em;
`;

const StyledTextDiv = styled.div`
  margin-top: 13px;
  padding-bottom: 1em;
`;

const Line = styled.div`
  margin-left: 3px;
  position: absolute;
  width: 4px;
  height: ${props => {
    if (props.last) return "50px";
    return "100px";
  }};
  margin-top: 1px;
  background-color: #2e2e2e;
`;

const Circle = styled.div`
  position: absolute;
  margin-left: -2px;
  z-index: 2;
  background-color: #2e2e2e;
  width: 10px;
  height: 10px;
  border: 2px solid white;
  border-radius: 50%;
`;

const experience = data.Experience;

export default function ExperienceCard() {
  return (
    <StyledDiv>
      {experience.map((data, i) => (
        <StyledCols>
          <ArrowDiv>
            <StyledYear>{data.Year}</StyledYear>
            <StyledYearArrow />
          </ArrowDiv>
          <StyledBorderDiv>
            <Circle />
            {experience.length - 1 === i ? <Line last /> : <Line />}
          </StyledBorderDiv>
          <StyledTextDiv>
            <StyledText h2 b>
              {data.Title}
            </StyledText>
            <StyledText h3 b>
              {data.Company}
            </StyledText>
            <StyledText p>{data.Description}</StyledText>
          </StyledTextDiv>
        </StyledCols>
      ))}
    </StyledDiv>
  );
}
