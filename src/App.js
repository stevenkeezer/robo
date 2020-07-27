import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/tailwind_output.css";

const Test = () => <div>TESTING</div>;
const Home = () => <div>HOME</div>;

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
      </div>
    </Router>
  );
}

export default App;
