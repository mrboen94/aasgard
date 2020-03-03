import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  background-position: center;
  display: block;
  margin: 0 auto;
`;

const StyledImage = styled(Img)`
  filter: grayscale(100%);
  border: solid 4px;
  &:hover {
    filter: grayscale(0%);
    -webkit-transition: -webkit-filter 2s linear;
    border: solid 4px;
  }
  -webkit-transition: -webkit-filter 2s linear;
  border-radius: 50%;
  background-size: cover;
`;

const ImageWrapper = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <StyledImage fluid={data.profilePicture.childImageSharp.fluid} />
    </Wrapper>
  );
};

export default ImageWrapper;
