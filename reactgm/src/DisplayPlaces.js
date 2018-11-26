import React, { Component } from "react";
import { dtlaMuseums } from "./Places";
import "./DisplayPlaces.css";

class DisplayResults extends Component {
  state = {
    results: [
      {
        name: "The Broad",
        price: 20,
        hoursOfOpp: "8am-9pm",
        eventTime: "any",
        imgUrl: "https://www.thebroad.org/sites/default/files/logo.png",
        desc: "lorem ipsum"
      }
    ]
  };

  //   componentDidMount() {
  //     this.setState({ results: dtlaMuseums });
  //   }

  render() {
    return (
      <React.Fragment>
        <ul className="resultContainer">
          {this.state.results.map(result => {
            return (
              <li className="resultEntry">
                <img className="resultImage" src={result.imgUrl} />{" "}
                <div className="resultBody">
                  <p>{result.name}</p>
                  <p>{result.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default DisplayResults;
