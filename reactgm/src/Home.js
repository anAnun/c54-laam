import React from "react";
import styles from "./App.module.css";

class Home extends React.Component {
  touristMode = () => {
    this.props.history.push("/tourist-mode-home");
  };

  render() {
    return (
      <React.Fragment>
        <button
          className={styles.touristmodebutton}
          onClick={() => this.touristMode()}
        >
          TOURIST MODE
        </button>
      </React.Fragment>
    );
  }
}

export default Home;
