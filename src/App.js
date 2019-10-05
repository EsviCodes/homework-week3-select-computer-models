import React from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  // console.log(props); // check dispatch when App was a function - works!

  render() {
    // console.log(this.props); // check dispatch when App is a class - works!
    // console.log(this.props); // check if computerModels is a prop - works!
    const data = [
      {
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      {
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      {
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      {
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    ];
    // Generates an unique identifier - use in key
    const uuidv4 = require("uuid/v4");

    return (
      <div className="App">
        <h1>Ancient Computer Models</h1>
        <select>
          {/*should this also be in the map? CHECK LATER}*/}
          <option key={uuidv4()} value="">
            -- pick a model --
          </option>{" "}
          {data.map(computer => {
            // console.log(computer) // gives an object of a computer model
            // console.log("NAME", computer.name); // gives computer name
            // console.log("YEAR", computer.year); // gives year of the computer model
            return (
              <option key={uuidv4()} value={computer.name}>
                {computer.name} ({computer.year})
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    computerModels: state.computerModels
  };
};

export default connect(mapStateToProps)(App);
