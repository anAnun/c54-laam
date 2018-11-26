import React from "react";
import catStyles from "./Categories.module.css";

class Details extends React.Component {
  back = () => {
    this.props.history.push("/tourist-mode-home");
  };

  buy = () => {
    console.log("Purchased")
  };

  render() {
    return (
      <React.Fragment>
        <button className={catStyles.button} onClick={() => this.buy()}>
          Buy Now
        </button>
        <button className={catStyles.button} onClick={() => this.back()}>
          Back
        </button>
      </React.Fragment>
    );
  }
}

export default Details;
