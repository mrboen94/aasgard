import React from "react";
import styled from "styled-components";
import { ProfilePicture } from "./Assets";

const StyledImage = styled.div`
  background-image: url(${ProfilePicture});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
  filter: grayscale(100%);
  border: solid 4px;
  &:hover {
    filter: grayscale(0%);
    -webkit-transition: -webkit-filter 2s linear;
    border: solid 4px;
  }
  -webkit-transition: -webkit-filter 2s linear;
`;

const StyledSpinner = styled.div``;

export default function ImageWrapper() {
  return (
    <>
      <StyledImage />
      <StyledSpinner />
    </>
  );
}
