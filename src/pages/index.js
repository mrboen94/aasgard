import React from "react"
import styled from "styled-components"
import { SideBar } from "../components/SideBar"
import { AboutMe, Experience, Education, Knowledge } from "../components"

const PageWrapper = styled.div`
  display: flex;
`

const StyledDiv = styled.div`
  padding: 1em;
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  min-width: 700px;
`

const IndexPage = () => (
  <PageWrapper>
    <SideBar />
    <StyledDiv>
      <AboutMe />
      <Experience />
      <Education />
      <Knowledge />
    </StyledDiv>
  </PageWrapper>
)

export default IndexPage
