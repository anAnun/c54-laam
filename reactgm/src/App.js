import React, { Component } from "react";
import Categories from "./Categories";
import TouristModeHome from "./TouristModeHome.js";
import Home from "./Home";
import { Route, withRouter } from "react-router-dom";
<<<<<<< HEAD
import Details from "./Details";
import "./grid.css";
=======
import "./grid.css";
import DisplayPlaces from "./DisplayPlaces.js";
import styles from "./App.module.css";
>>>>>>> f2af145adc4dd3cbe4eb76196bca82d22b3af3af

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
