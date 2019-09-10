import React from "react";
import styled from "styled-components";
import { Typography, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

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
  return (
    <StyledDiv>
      <ThemeProvider theme={theme}>
        <Typography color="primary">
          Some of my projects can be found at{" "}
          <a href="https://github.com/mrboen94">my github.</a>
        </Typography>
      </ThemeProvider>
    </StyledDiv>
  );
}
