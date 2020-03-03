import React from "react"
import styled from "styled-components"
import { EducationCard } from "./sub-components"
import data from "./Data/data"
import StyledText from "./StyledText"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: columns;
  padding-bottom: 1em;
`

const Spacer = styled.div`
  margin-top: 2em;
  margin-bottom: 1em;
`

const education = data.Education
export default function Education() {
  return (
    <>
      <Spacer>
        <StyledText h1 b>
          Education:
        </StyledText>
      </Spacer>
      <StyledDiv>
        {education.map(data => (
          <EducationCard
            key={data.id}
            title={data.Title}
            school={data.School}
            description={data.Description}
          />
        ))}
      </StyledDiv>
    </>
  )
}