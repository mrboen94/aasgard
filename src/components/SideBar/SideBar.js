import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Info, ImageWrapper, Interests, Contact, Socials } from "./";
import { StyledText } from "../";

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
      <ImageWrapper />
      <Navigation>
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
