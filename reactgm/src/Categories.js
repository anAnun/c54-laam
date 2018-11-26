import React from "react";
import catStyles from "./Categories.module.css";
import { Link } from "react-router-dom";

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
        <Link to="/museums">MUSEUMS</Link>
        <button className={catStyles.close} onClick={() => this.back()}>
          back
        </button>
      </React.Fragment>
    );
  }
}

export default Categories;
