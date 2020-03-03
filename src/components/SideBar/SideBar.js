import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Info, ImageWrapper, Interests, Contact, Socials } from "./";
import { StyledText } from "../";

const StyledDiv = styled.div`
  padding: 12px;
  background-color: #e2e2e2;
  height: 100%;
  min-height: 1200px;
  width 15em;
  margin-left: 0;
`;

const FlexDiv = styled.div`
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
