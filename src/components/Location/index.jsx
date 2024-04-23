import React from "react";
import { Link } from "react-router-dom";

const Location = ({ location }) => {
  return (
    <div>
      <span>{location}</span>
      <Link to={`/update/${location}`}>update</Link>
      <Link to={`/delete/${location}`}>delete</Link>
    </div>
  );
};

export default Location;
