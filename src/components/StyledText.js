import React from "react"
import styled, { css } from "styled-components"

const baseStyle = css`
  margin-bottom: ${props => props.noMargin && "0"};
  color: #2e2e2e;
  margin: 0;
  text-align: ${props => {
    if (props.center) return "center"
    if (props.right) return "right"
    return "left"
  }};
  font-weight: ${props => {
    if (props.b) return "bold"
    return "normal"
  }};
  max-width: 100%;
  padding-right: 1em;
`

const HeadingOne = styled.h1`
  ${baseStyle};
  font-size: 1.8em;
`

const HeadingTwo = styled.h2`
  ${baseStyle};
  font-size: 1.5em;
`

const HeadingThree = styled.h3`
  ${baseStyle};
  font-size: 0.8em;
`

const HeadingFour = styled.h4`
  ${baseStyle};
  font-size: 0.7em;
`

const StyledP = styled.p`
  ${baseStyle};
`

export default function StyledText({
  h1,
  h2,
  h3,
  h4,
  p,
  b,
  noMargin,
  right,
  center,
  ...props
}) {
  if (h1)
    return (
      <HeadingOne
        noMargin={noMargin}
        right={right}
        center={center}
        b={b}
        {...props}
      />
    )
  if (h2)
    return (
      <HeadingTwo
        noMargin={noMargin}
        right={right}
        center={center}
        b={b}
        {...props}
      />
    )
  if (h3)
    return (
      <HeadingThree
        noMargin={noMargin}
        right={right}
        center={center}
        b={b}
        {...props}
      />
    )
  if (h4)
    return (
      <HeadingFour
        noMargin={noMargin}
        right={right}
        center={center}
        b={b}
        {...props}
      />
    )
  return (
    <StyledP
      noMargin={noMargin}
      right={right}
      center={center}
      b={b}
      {...props}
    />
  )
}
