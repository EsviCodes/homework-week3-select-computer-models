import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ModelDetails from "./components/ModelDetails";

class App extends Component {
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

  // Local State - stores currently selected model if added by clicking on the button "Add"
  state = {};

  // Event Handlers
  // Tracks changes from the drop-down-list
  updateSelection = event => {
    this.setState({
      name: event.target.value
    });
  };

  // Tracks clicks on the button "Add"
  addModel = () =>
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
        this.props.dispatch(action);
      });

  render() {
    // Generates an unique identifier - I used this to create the keys
    const uuidv4 = require("uuid/v4");

    return (
      <div className="App">
        <h1>Computer Models</h1>
        {this.props.computerModels.map(computer => {
          return (
            <ModelDetails
              key={uuidv4()}
              name={computer.name}
              manufacturer={computer.manufacturer}
              year={computer.year}
              origin={computer.origin}
            />
          );
        })}
        <select value={this.state.name} onChange={this.updateSelection}>
          <option key={uuidv4()} value="">
            -- pick a model --
          </option>
          {this.data.map(computer => {
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
