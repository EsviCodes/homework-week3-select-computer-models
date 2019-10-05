import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ModelDetails from "./components/ModelDetails";

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

  // Event Handlers
  updateSelection = event => {
    // console.log("I Changed"); // works
    // console.log(event.target.value); // works

    this.setState({
      name: event.target.value
    });
  };

  addModel = () =>
    // console.log("click"); // works!
    // console.log(event); // works. gets event
    // console.log(this.data); // works! gives array with objects

    /* I checked if I should use "event.preventDefault()" but after some experiments and checking MDN web dogs which says "calling preventDefault() for a non-cancelable event, such as one dispatched via EventTarget.dispatchEvent(), without specifying cancelable: true  has no effect." - I don't use event.preventDefault()*/

    this.data
      .filter(computer => computer.name === this.state.name)
      .map(model => {
        const action = {
          type: "ADD_MODEL",
          payload: {
            name: model.name,
            manufacturer: model.manufacturer,
            year: model.year,
            origin: model.origin
          }
        };
        this.props.dispatch(action); // works. Shows up in the Redux Dev tools
      });

  render() {
    // console.log(this.props); // check dispatch when App is a class - works!
    // console.log(this.props); // check if computerModels is a prop - works!

    // Generates an unique identifier - use in key
    const uuidv4 = require("uuid/v4");

    return (
      <div className="App">
        <h1>Ancient Computer Models</h1>
        {this.props.computerModels.map(computer => {
          return (
            <ModelDetails
              key={uuidv4()}
              // name={8} check if PropTypes works - Yes!
              name={computer.name}
              //manufacturer={8} check if PropTypes works - Yes!
              manufacturer={computer.manufacturer}
              //year={"Hello"} check if PropTypes works - Yes!
              year={computer.year}
              //origin={true} check if PropTypes works - Yes!
              origin={computer.origin}
            />
          );
        })}
        <select value={this.state.name} onChange={this.updateSelection}>
          {/*should this also be in the map? CHECK LATER}*/}
          <option key={uuidv4()} value="">
            -- pick a model --
          </option>
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
