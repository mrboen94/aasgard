import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
    border-bottom: 2px solid;
    padding-left 12px;
`

export default function Info() {
  return (
    <StyledDiv>
      <h3>About me:</h3>
      <p>
        <b>Name:</b> Mathias Bøe
      </p>
      <p>
        <b>Born:</b> 14.09.1994
      </p>
      <p>
        <b>Nationality:</b> Norwegian
      </p>
      <p>
        <b>Languages:</b> Norwegian, English
      </p>
    </StyledDiv>
  )
}
