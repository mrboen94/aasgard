import React from "react";
import styled from "styled-components";
import P5Wrapper from "react-p5-wrapper";
import { sketch } from "./Sketches";
import { Grid, Typography, Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StyledGrid = styled(Grid)`
  padding: 1em;
`;

const ButtonGrid = styled(Grid)``;

const StyledDiv = styled.div`
  background-color: Gainsboro;
`;

const ButtonDiv = styled.div`
  padding: 1em;
  background-color: lightGray;
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
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Projects({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Project} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Project({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h3>Contact</h3>
    </div>
  );
}
