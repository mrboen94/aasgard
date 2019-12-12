import React from 'react';
import styled from 'styled-components';
import data from '../Data/data.json';

const StyledDiv = styled.div`
    display: flex;
    flex: 10 5;
    flex-wrap: wrap;
    width: 100%;
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

const StyledH2 = styled.h2`
    font-size: 1.5em;
    text-align: left;
    color: #2e2e2e;
    padding: 0px;
    margin: 0px;
`;

const StyledH3 = styled.h3`
    font-size: 0.8em;
    text-align: left;
    color: #2e2e2e;
    padding: 0px;
    margin: 0px;
`;

const StyledP = styled.p`
    font-size: 0.8em;
    text-align: left;
    color: #2e2e2e;
    padding: 0px;
    margin: 0px;
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
    height: 100px;
`;

const Line = styled.div`
    margin-left: 3px;
    position: absolute;
    width:  4px;
    height: 100px;
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
    {experience.map(data => (
        <StyledCols>
            <ArrowDiv>
                <StyledYear>
                    {data.Year}
                </StyledYear>
                <StyledYearArrow />
            </ArrowDiv>
            <StyledBorderDiv>
                <Circle />
                <Line />
            </StyledBorderDiv>
            <StyledTextDiv>
                <StyledH2>{data.Title}</StyledH2>
                <StyledH3>{data.Company}</StyledH3>
                <StyledP>{data.Description}</StyledP>
            </StyledTextDiv>
        </StyledCols>
    ))}
        </StyledDiv>
    )}