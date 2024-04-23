import React, { useContext } from "react";
import { LocationContext } from "../context/LocationProvider";

const Locations = () => {
  const { locations, setLocations } = useContext(LocationContext);
  return (
    <div>
      <h3>Locations</h3>
      {locations.map((location) => {
        return <p key={location}>{location}</p>;
      })}
    </div>
  );
};

export default Locations;
