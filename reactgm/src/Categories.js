import React from "react";
import catStyles from "./Categories.module.css";

class Categories extends React.Component {
  back = () => {
    this.props.history.push("/tourist-mode-home");
  };
  render() {
    return (
      <React.Fragment>
        <div>asdfasdfasdf</div>
        <button className={catStyles.button}>NIGHT LIFE</button>
        <button className={catStyles.button}>MUSEUMS</button>
        <button className={catStyles.button}>RESTAURANTS</button>
        <button className={catStyles.button}>TOURIST ATTRACTIONS</button>
        <button className={catStyles.close} onClick={() => this.back()}>
          back
        </button>
      </React.Fragment>
    );
  }
}

export default Categories;
