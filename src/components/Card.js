import React from "react";
import styled from "styled-components";
import StyledText from "./StyledText";
import { Link } from "gatsby";

const StyledDiv = styled.div`
  padding: 12px;
  border-radius: 6px;
  background-color: #e2e2e2;
  color: #2e2e2e;
  max-width: 250px;
  margin-bottom: 12px;
`;

export default function Card({ title, description, link }) {
  return (
    <StyledDiv>
      <StyledText h2 b>
        {title}
      </StyledText>
      <StyledText p>{description}</StyledText>
      <Link to={link}>Link</Link>{" "}
      {/** make it possible to not input link element with inline conditional rendering */}
    </StyledDiv>
  );
}
