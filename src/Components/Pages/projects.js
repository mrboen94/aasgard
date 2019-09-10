import React from "react";
import styled from "styled-components";
import { Typography, createMuiTheme, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import PROJECTS from "../Data/projects";
import { ProjectCard } from "..";

const StyledDiv = styled.div`
  padding: 1em;
  background-color: #222629;
  height: 100vh;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#6B6E70"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
    // error: will use the default color
  }
});

export default function HomeBody() {
  const projects = PROJECTS;
  return (
    <StyledDiv>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {projects.map(project => (
          <ProjectCard data={project} />
        ))}
      </Grid>
      <ThemeProvider theme={theme}>
        <Typography color="primary"></Typography>
      </ThemeProvider>
    </StyledDiv>
  );
}
