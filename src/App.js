import React from "react";
import P5Wrapper from "react-p5-wrapper";
import { sketch } from "./Components/Sketches/";

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}

export default App;
