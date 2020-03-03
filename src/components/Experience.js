import React from "react"
import styled from "styled-components"
import { ExperienceCard } from "./sub-components"
import { StyledText } from "./"

const StyledDiv = styled.div`
  background-color: #ffffff;
`

export default function Experience() {
  return (
    <StyledDiv>
      <StyledText h1 b>
        Experience:
      </StyledText>
      <ExperienceCard />
    </StyledDiv>
  )
}
