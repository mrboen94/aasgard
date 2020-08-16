import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Info, ImageWrapper, Interests, Contact, Socials } from "./";
import { StyledText } from "../";

const BackgroundDiv = styled.div`
  position: fixed;
  left: 0px;
  height: 100vh;
  width: 250px;
  background-color: #e2e2e2;
  z-index: -1;
`;

// fix hacked background div solution, it overlaps does not work on mobile..
const StyledDiv = styled.div`
  padding-top: 12px;
  background-color: #e2e2e2;
  width 250px;
  margin-left: 0;
`;

const FlexDiv = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

// Fix the css to properly align the text in the middle
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 12px;
  padding-left: 6px;
  width: 100%;
`;

export default function SideBar() {
  return (
    <StyledDiv>
      {/* <BackgroundDiv /> */}
      <ImageWrapper />
      <Navigation>
        <Link to="/">
          <StyledText p center b>
            HOME
          </StyledText>
        </Link>
        <Link to="/projects/">
          <StyledText p center b>
            PROJECTS
          </StyledText>
        </Link>
        <Link to="/misc/">
          <StyledText p center b>
            MISC
          </StyledText>
        </Link>
      </Navigation>
      <FlexDiv>
        <Contact />
        <Info />
        <Interests />
        <Socials />
      </FlexDiv>
    </StyledDiv>
  );
}
