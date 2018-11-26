import React from "react";
import catStyles from "./Categories.module.css";

class Details extends React.Component {
    back = () => {
      this.props.history.push("/tourist-mode-home");
    };
    render() {
      return (
        <React.Fragment>          
          <button className={catStyles.button}>Buy Now</button>
          <button className={catStyles.close} onClick={() => this.back()}>
            back
          </button>
        </React.Fragment>
      );
    }
  }
  
  export default Details;