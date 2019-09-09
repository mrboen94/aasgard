import React from "react";
import styled from "styled-components";
import P5Wrapper from "react-p5-wrapper";
import { sketch } from "./Sketches";
import { Grid, Typography, Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeBody, ProjectsBody, ContactBody, AboutBody } from "./Pages";

const StyledGrid = styled(Grid)`
  padding: 1em;
`;

const ButtonGrid = styled(Grid)``;

const StyledDiv = styled.div`
  background-color: Gainsboro;
  box-shadow: inset 0 -10em 10em white;
`;

const ButtonDiv = styled.div`
  padding: 1em;
  background-color: lightgray;
`;

export default function Header() {
  return (
    <Router>
      <StyledDiv>
        <StyledGrid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h6">Welcome to Aasgard!</Typography>
          <Route path="/" exact component={null}>
            <P5Wrapper sketch={sketch} />
          </Route>
          <Typography variant="h6">A website by Mathias Bøe</Typography>
        </StyledGrid>
        <ButtonDiv>
          <ButtonGrid container direction="row" alignItems="center">
            <Link to="/">
              <Button>Home</Button>
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
