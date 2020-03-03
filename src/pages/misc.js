import React from "react";
import styled from "styled-components";
import { SideBar } from "../components/SideBar";
import { FadeIn } from "../components";

const PageWrapper = styled.div`
  display: flex;
`;

const Misc = () => (
  <PageWrapper>
    <SideBar />
    <FadeIn>
      <h1>Top tier content</h1>
      <p>Welcome to page 3</p>
    </FadeIn>
  </PageWrapper>
);

export default Misc;
