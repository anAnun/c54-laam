import React from "react";
import catStyles from "./Categories.module.css";
      
import pic_nightlife from "./images/categorynightlife.png";
import pic_museums from "./images/categorymuseums.png";
import pic_restaurants from "./images/categoryrestaurants.png";
import slick from "./slick.css";

class Categories extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={catStyles.buttonwrapper}>
          <button className={catStyles.buttonarrow}>{"<"}</button>
          <a>
            <img src={pic_nightlife} className={catStyles.nightlife} />
          </a>
          <a>
            <img src={pic_museums} className={catStyles.museums} />
          </a>
          <a>
            <img src={pic_restaurants} className={catStyles.restaurants} />
          </a>

          <button className={catStyles.buttonarrow}>{">"}</button>
        </div>
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
        <Link className={catStyles.button} to="/museums">
          MUSEUMS
        </Link>
        <button className={catStyles.close} onClick={() => this.back()}>
          back
        </button>
      </React.Fragment>
    );
  }
}

export default Categories;
