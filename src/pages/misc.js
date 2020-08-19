import React from "react";
import styled from "styled-components";
import axios from "axios";
import { SideBar } from "../components/SideBar";
import { FadeIn } from "../components";

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
`;

export default class Misc extends React.Component {
  state = {
    topTracks: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=mrboen94&api_key=5aaa8de171107513b0d4302fae8bf454&limit=10&format=json`
      )
      .then((res) => {
        const topTracks = res.data.toptracks.track;
        this.setState({ topTracks });
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log("something went wrong, try again later");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error");
        }
      });
  }
  render() {
    return (
      <PageWrapper>
        <SideBar />
        <FadeIn>
          <h1>WIP</h1>
          <p>note again that this page is very much under construction.</p>
          <h2>Top tracks</h2>
          {this.state.topTracks.map((tracks) => (
            <FadeIn>
              <a href={tracks.url}>
                <p>{tracks.name}</p>
              </a>
            </FadeIn>
          ))}
          <h2>Last Beer</h2>
          <p>WIP</p>
        </FadeIn>
      </PageWrapper>
    );
  }
}
