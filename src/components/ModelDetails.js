import React from "react";
import PropTypes from "prop-types";

ModelDetails.propTypes = {
  name: PropTypes.string,
  manufacturer: PropTypes.string,
  year: PropTypes.number,
  origin: PropTypes.string
};

export default function ModelDetails(props) {
  // console.log("MODEL DETAIL PROPS", props); // works!
  // console.log(props.computerModels); // gets the state

  const { name, manufacturer, year, origin } = props;

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
