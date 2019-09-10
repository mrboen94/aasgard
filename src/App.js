import React from "react";
import { Header } from "./Components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
