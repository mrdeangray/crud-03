import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateLocation = () => {
  const { location } = useParams();
  return (
    <div>
      <Link to={`/`}>Back</Link>
      Update: {location}
    </div>
  );
};

export default UpdateLocation;
