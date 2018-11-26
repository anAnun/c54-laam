import React from "react";
import styles from "./App.module.css";

class TouristModeHome extends React.Component {
  back = () => {
    this.props.history.push("/home");
  };

  categories = () => {
    this.props.history.push("/categories");
  };
  render() {
    return (
      <React.Fragment>
        <button className={styles.button} onClick={() => this.categories()}>
          CATEGORIES
        </button>
        <button className={styles.back} onClick={() => this.back()}>
          BACK
        </button>
      </React.Fragment>
    );
  }
}

export default TouristModeHome;
