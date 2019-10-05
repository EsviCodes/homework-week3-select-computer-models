import React from "react";
// import PropTypes from "prop-types";

ModelDetails.propTypes = {};

export default function ModelDetails(props) {
  //console.log("MODEL DETAIL PROPS", props); // works!
  // console.log(props.computerModels); // gets the state

  //Generates an unique identifier - use in key
  // const uuidv4 = require("uuid/v4");

  const { name, manufacturer, year, origin } = props.computerModels;

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Manufacturer: {manufacturer}</li>
        <li>Year: {year}</li>
        <li>Origin: {origin}</li>
      </ul>
    </div>
  );
}
