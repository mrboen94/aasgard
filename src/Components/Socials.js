import React from "react";
import styled from "styled-components";
import { Facebook, LinkedIn, Instagram, Github } from "./Assets";

const StyledDiv = styled.div`
  border-bottom: 2px solid;
  padding-left: 12px;
  padding-bottom: 12px;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0px 0px;
  color: black;
`;

// I need to find a better way to do this animation hack...
const StyledImg = styled.img`
  padding-top: 6px;
  padding-bottom: 6px;
  height: 48px;
  padding-right: 12px;
  &:hover {
    height: 58px;
    padding-right: 2px;
    padding-bottom: 1px;
    padding-top: 1px;
  }
  transition: 0.2s;
`;

export default function Socials() {
  return (
    <StyledDiv>
      <h3>Socials:</h3>
      <StyledLink href="www.linkedin.com/in/boemathias">
        <StyledImg alt="LinkedIn Logo" src={LinkedIn} />
        <p>LinkedIn</p>
      </StyledLink>
      <StyledLink href="https://github.com/mrboen94">
        <StyledImg alt="Github Logo" src={Github} />
        <p>Github</p>
      </StyledLink>
      <StyledLink href="https://www.facebook.com/boephotos">
        <StyledImg alt="Facebook Logo" src={Facebook} />
        <p>Facebook</p>
      </StyledLink>
      <StyledLink href="https://www.instagram.com/boemathias/">
        <StyledImg alt="Instagram Logo" src={Instagram} />
        <p>Instagram</p>
      </StyledLink>
    </StyledDiv>
  );
}
