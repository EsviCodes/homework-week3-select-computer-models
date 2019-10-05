import React from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  // console.log(props); // check dispatch when App was a function - works!

  render() {
    // console.log(this.props); // check dispatch when App is a class - works!
    // console.log(this.props); // check if computerModels is a prop - works!
    return (
      <div className="App">
        <h1>Hello World!</h1>
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
