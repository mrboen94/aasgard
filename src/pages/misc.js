import React from "react"
import styled from "styled-components"
import { SideBar } from "../components/SideBar"

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
const Misc = () => (
  <PageWrapper>
    <SideBar />
    <StyledDiv>
      <h1>Top tier content</h1>
      <p>Welcome to page 3</p>
    </StyledDiv>
  </PageWrapper>
)

export default Misc
