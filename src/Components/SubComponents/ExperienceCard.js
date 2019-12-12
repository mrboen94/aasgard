import React from 'react';
import styled from 'styled-components';
import data from '../Data/data.json';

const StyledDiv = styled.div`
    display: flex;
    flex: 10 5;
    flex-wrap: wrap;
    width: 100%;
    justify-content: left;
`;

const StyledCols = styled.div`
    padding: 0px;
    display: flex;
    justify-content: left;
    width: 100%;
`;

const ArrowDiv = styled.div`
    margin-top: 0.3em;
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
    width: 20%
`;

const StyledTextDiv = styled.div`
    height: 80px;
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
            <StyledBorderDiv />
            <StyledTextDiv>
                <StyledH2>{data.Title}</StyledH2>
                <StyledH3>{data.Company}</StyledH3>
                <StyledP>{data.Description}</StyledP>
            </StyledTextDiv>
        </StyledCols>
    ))}
        </StyledDiv>
    )}