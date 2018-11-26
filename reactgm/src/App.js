import React, { Component } from "react";
import Categories from "./Categories";
import TouristModeHome from "./TouristModeHome.js";
import Home from "./Home";
import { Route, withRouter } from "react-router-dom";
import Details from "./Details";
import "./grid.css";

const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending...",
    data: gm.info
  };

  componentDidMount() {
    this.props.history.push("/");
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/tourist-mode-home" component={TouristModeHome} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/details" component={Details} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
