import React, { useContext } from "react";
import { LocationContext } from "../context/LocationProvider";
import Location from "../Location";
import { Link } from "react-router-dom";

const Locations = () => {
  const { locations } = useContext(LocationContext);
  return (
    <div>
      <h3>Locations</h3>
      {locations?.map((location) => {
        return <Location key={location} location={location} />;
      })}
      <Link to={`/create`}>
        <button>Create Location</button>
      </Link>
    </div>
  );
};

export default Locations;
