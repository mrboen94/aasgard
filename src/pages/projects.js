import React from "react";
import styled from "styled-components";
import data from "../components/Data/data";
import { SideBar } from "../components/SideBar";
import { FadeIn } from "../components";
import Card from "../components/Card";

const PageWrapper = styled.div`
  display: flex;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const projectData = data.projects;

const Projects = () => (
  <PageWrapper>
    <SideBar />
    <FadeIn>
      <h1>Highlighted projects</h1>
      <p>Please note that this page is under construction</p>
      <CardWrapper>
        {projectData.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            description={data.description}
            link={data.link}
          />
        ))}
      </CardWrapper>
    </FadeIn>
  </PageWrapper>
);

export default Projects;
