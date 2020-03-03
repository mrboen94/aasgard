import React from "react";
import styled from "styled-components";
import ProfilePicture from "../../images/me-300x300.jpg";

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  margin: 0 auto;
  padding-bottom: 12px;
`;

const StyledImage = styled.img`
  height: 200px;
  width: 200px;
  filter: grayscale(100%);
  border: solid 4px;
  &:hover {
    filter: grayscale(0%);
    -webkit-transition: -webkit-filter 2s linear;
    border: solid 4px;
  }
  -webkit-transition: -webkit-filter 2s linear;
  border-radius: 50%;
`;

const ImageWrapper = () => {
  return (
    <Wrapper>
      <StyledImage src={ProfilePicture} />
    </Wrapper>
  );
};

export default ImageWrapper;
