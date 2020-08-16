import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import data from "../Data/data.json";

const StyledProgressBar = styled.div`
  width: 100%
  justify-content: center;
  margin: 0 auto;
`;

const aboutMe = data.aboutme;

export default function AboutMeBars() {
  return (
    <>
      {aboutMe.map((data) => (
        <StyledProgressBar key={data.id}>
          <ProgressBar percentage={data.percent} skill={data.title} visual />
        </StyledProgressBar>
      ))}
    </>
  );
}
