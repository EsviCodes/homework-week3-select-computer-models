import React from "react";
import PropTypes from "prop-types";

ModelDetails.propTypes = {
  name: PropTypes.string,
  manufacturer: PropTypes.string,
  year: PropTypes.number,
  origin: PropTypes.string
};

export default function ModelDetails(props) {
  const { name, manufacturer, year, origin } = props;

  return (
    <div>
      <ul>
        <li>
          <strong>Name</strong>: {name}
        </li>
        <li>
          <strong>Manufacturer</strong>: {manufacturer}
        </li>
        <li>
          <strong>Year</strong>: {year}
        </li>
        <li>
          <strong>Origin</strong>: {origin}
        </li>
      </ul>
    </div>
  );
}
