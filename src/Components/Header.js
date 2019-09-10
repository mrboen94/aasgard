import React from "react";
import styled from "styled-components";
import P5Wrapper from "react-p5-wrapper";
import { sketch } from "./Sketches";
import { Grid, Typography, Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeBody, ProjectsBody, ContactBody, AboutBody } from "./Pages";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const StyledGrid = styled(Grid)`
  padding: 1em;
`;

const ButtonGrid = styled(Grid)``;

const StyledDiv = styled.div`
  background-color: #222629;
`;

const ButtonDiv = styled.div`
  padding: 0.3em;
  background-color: #86c232;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ffffff"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
    // error: will use the default color
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "#86C232",
        border: 0,
        color: "white",
        height: 38,
        padding: "0 30px"
      }
    }
  }
});

export default function Header() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <StyledDiv>
          <StyledGrid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Typography color="primary" variant="h5">
              Welcome to Aasgard!
            </Typography>
            <Link to="/">
              <P5Wrapper sketch={sketch} />
            </Link>
            <Typography variant="h5" color="primary">
              A website by Mathias Bøe
            </Typography>
          </StyledGrid>
          <ButtonDiv>
            <ButtonGrid container justify="space-evenly">
              <Link to="/">
                <Button color>Home</Button>
              </Link>
              <Link to="/about">
                <Button>About</Button>
              </Link>
              <Link to="/projects">
                <Button>Projects</Button>
              </Link>
              <Link to="/contact">
                <Button>Contact</Button>
              </Link>
            </ButtonGrid>
          </ButtonDiv>
        </StyledDiv>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </ThemeProvider>
    </Router>
  );
}

function Home() {
  return <HomeBody />;
}

function About() {
  return <AboutBody />;
}

function Projects({ match }) {
  return <ProjectsBody />;
}

function Contact() {
  return <ContactBody />;
}
