import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Joke from "./components/Joke";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container mx-auto">
          <Route path="/" exact component={Joke} />
        </div>
      </div>
    </Router>
  );
}

export default App;
