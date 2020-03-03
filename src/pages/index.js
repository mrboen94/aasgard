import React from "react";
import styled from "styled-components";
import { SideBar } from "../components/SideBar";
import {
  AboutMe,
  Experience,
  Education,
  Knowledge,
  FadeIn
} from "../components";

const PageWrapper = styled.div`
  display: flex;
`;

const IndexPage = () => (
  <PageWrapper>
    <SideBar />
    <FadeIn>
      <AboutMe />
      <Experience />
      <Education />
      <Knowledge />
    </FadeIn>
  </PageWrapper>
);

export default IndexPage;
