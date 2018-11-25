import React, { Component } from "react";
import styles from "./App.module.css";

const gm = window.gm;
const ngi = window.ngi;

class App extends Component {
  state = {
    vin: "pending..."
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    this.setState({ vin });
    console.log(vin);
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <div className={styles.root}>
        <div>VIN: {this.state.vin}</div>
        <button onClick={this.handleClose}>Close</button>
      </div>
    );
  }
}

export default App;
