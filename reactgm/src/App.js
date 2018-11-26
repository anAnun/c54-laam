import React, { Component } from "react";
import styles from "./App.module.css";
import Categories from "./Categories";
import Home from "./Home";
import { Route, withRouter } from "react-router-dom";
import "./grid.css";

const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending...",
    data: gm.info
  };

  componentDidMount() {}

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/tourist-mode-home" component={TouristModeHome} />
        <Route exact path="/categories" component={Categories} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
