import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

// SEE IF YOU CAN PREVENT DEFAULT WHILE HANDLING EVENTS!

class App extends Component {
  // console.log(props); // check dispatch when App was a function - works!

  data = [
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

  // Local State - stores currently selected model
  state = {};

  // handleSubmit(event) {
  //   // whenever the value of the drop-down changes we run a method called updateSelection
  //   console.log("I've been clicked!"); // works
  //   event.preventDefault();
  // }

  // Event Handlers
  updateSelection = event => {
    // console.log("I Changed"); // works
    // console.log(event.target.value); // works

    // CHECK-this overrides the name property. Should uses like this or should it create an array of objects?
    this.setState({
      name: event.target.value
    });
  };

  addModel = () =>
    // console.log("click"); // works!
    // console.log(event); // works. gets event
    // console.log(this.data); // works! gives array with objects

    this.data.map(model => {
      // console.log(model) // works!
      // console.log(model.name) // works!

      if (model.name === this.state.name) {
        const action = {
          type: "ADD_MODEL",
          payload: {
            name: model.name,
            manufacturer: model.manufacturer,
            year: model.year,
            origin: model.origin
          }
        };

        this.props.dispatch(action); // works. Shows in the Redux Dev tools
      }
    });

  render() {
    // console.log(this.props); // check dispatch when App is a class - works!
    // console.log(this.props); // check if computerModels is a prop - works!

    // Generates an unique identifier - use in key
    const uuidv4 = require("uuid/v4");

    return (
      <div className="App">
        <h1>Ancient Computer Models</h1>

        <select onChange={this.updateSelection}>
          {/*should this also be in the map? CHECK LATER}*/}
          <option key={uuidv4()} value="">
            -- pick a model --
          </option>{" "}
          {this.data.map(computer => {
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
        <button onClick={this.addModel}>Add</button>
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
