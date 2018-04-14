import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FooContainer from "./Containers/FooContainer";
import BarContainer from "./Containers/BarContainer";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import "./App.css";
import CustomContainer from "./Containers/CustomContainer";

const initialState = {};
const history = createHistory();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const data = {
  buttonTextArr: ["foo", "mosdafsso", "baz"],
  cardTitle: "sdlfjsadljfs",
  cardSubtitle: "card subtitle"
};

const store = createStore(reducer);

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
      <Provider store={store}>
        <MuiThemeProvider>
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/showFoo" component={FooContainer} />
              <Route path="/showBar" component={() => <CustomContainer />} />
            </div>
          </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
