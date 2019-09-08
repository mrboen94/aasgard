import React from "react";
import styled from "styled-components";
import P5Wrapper from "react-p5-wrapper";
import { sketch } from "./Sketches";
import {
  Container,
  Grid,
  Button,
  ButtonGroup,
  Typography
} from "@material-ui/core";

const StyledContainer = styled(Container)`
  margin-top: 1em;
`;

export default function Header() {
  return (
    <StyledContainer maxWidth="s">
      <Grid xs={12}>
        <Typography variant="h1" component="h2">
          Welcome to Aasgard!
        </Typography>
        <P5Wrapper sketch={sketch} />
      </Grid>
    </StyledContainer>
  );
}
