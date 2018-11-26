import React, { Component } from "react";
import styles from "./App.module.css";
import Categories from "./Categories";
import { Route, withRouter } from "react-router-dom";

const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending...",
    data: gm.info
  };

  componentDidMount() {}

  goCategories = () => {
    this.props.history.push("/categories");
  };

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.goCategories()} className={styles.button}>
          hello
        </button>

        <Route exact path="/categories" component={Categories} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
