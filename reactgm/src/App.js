import React, { Component } from "react";
import Categories from "./Categories";
import TouristModeHome from "./TouristModeHome.js";
import Home from "./Home";
import { Route, withRouter } from "react-router-dom";
import "./grid.css";
import DisplayPlaces from "./DisplayPlaces.js";
import styles from "./App.module.css";

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
        <button onClick={() => this.handleClose()} />
        <div className={styles.margin} />
        <Route exact path="/" component={Home} />
        <Route exact path="/tourist-mode-home" component={TouristModeHome} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/museums" component={DisplayPlaces} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
