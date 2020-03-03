import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const StyledImage = styled(Img)`
  background-image: url(${props => props.image});
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

const ImageWrapper = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <StyledImage fluid={data.profilePicture.childImageSharp.fluid} />;
};

export default ImageWrapper;