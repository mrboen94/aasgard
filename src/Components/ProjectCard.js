import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import styled from "styled-components";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100vw",
    minWidth: "40vw"
  },
  media: {
    height: 100,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: grey
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ffffff"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#61892F"
    }
    // error: will use the default color
  },
  overrides: {
    // Style sheet name ⚛️
    MuiCard: {
      // Name of the rule
      text: {
        // Some CSS
        color: "#ffffff"
      },
      root: {
        backgroundColor: "#86c232"
      }
    }
  }
});

const StyledCard = styled(Card)`
  margin-bottom: 1em;
`;

export default function BeerCard({ data }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <StyledCard className={classes.card} raised="true" root>
        <CardHeader
          title={
            <Typography variant="h5" color="primary">
              {data.title}
            </Typography>
          }
          subheader={<Typography color="secondary">{data.tag}</Typography>}
        />
        <CardMedia className={classes.media} image={data.image} />
        <CardContent>
          <Typography variant="body2" color="primary" component="p">
            {data.description}
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            <a href={data.link}>Github</a>
          </Typography>
        </CardContent>
      </StyledCard>
    </ThemeProvider>
  );
}
