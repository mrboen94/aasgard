import Outrun from "../Assets/Images/outrun.gif";
import Roborally from "../Assets/Images/MainMenuLogo.png";
import Styled from "../Assets/Images/styledComponents.png";
import Shakesbeer from "../Assets/Images/Shakesbeer.png";

const PROJECTS = [
  {
    title: "Odin - A component library",
    description: "A component library I started making a while ago.",
    link: "https://github.com/mrboen94/odin",
    tag: "Just for fun",
    image: Styled,
    expandedDescription: ""
  },
  {
    title: "Outrun music visualizer",
    description: "A small little sideproject made with processing.",
    link: "https://github.com/mrboen94/OutrunMusicVisualizer",
    tag: "Just for fun",
    image: Outrun,
    expandedDescription: ""
  },
  {
    title: "Roborally - The board game",
    description: "From the INF112 course at UiB.",
    link: "https://github.com/mrboen94/Techs",
    tag: "University assignment",
    image: Roborally,
    expandedDescription: ""
  },
  {
    title: "Shakesbeer - Untappd API integration",
    description: "A sideproject implementing the untappd API.",
    link: "http://shakesbeer.netlify.com",
    tag: "Just for fun",
    image: Shakesbeer,
    expandedDescription: ""
  }
];

export default PROJECTS;
