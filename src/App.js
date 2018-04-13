import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FooContainer from "./Containers/FooContainer";
import BarContainer from "./Containers/BarContainer";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";

const Home = () => (
  <div className="options-wrapper">
    {"Select a button"}
    <ul>
      <li>
        <Link to="/showFoo">
          <RaisedButton primary={true} label="show Foo component" />
        </Link>
      </li>
      <li>
        <Link to="/showBar">
          <RaisedButton secondary={true} label="show Bar component" />
        </Link>
      </li>
    </ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/showFoo" component={FooContainer} />
            <Route path="/showBar" component={BarContainer} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
