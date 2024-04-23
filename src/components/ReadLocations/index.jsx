import React, { useContext } from "react";
import { LocationContext } from "../context/LocationProvider";
import Location from "../Location";

const Locations = () => {
  const { locations, setLocations } = useContext(LocationContext);
  return (
    <div>
      <h3>Locations</h3>
      {locations.map((location) => {
        return <Location key={location} location={location}/>;
      })}
    </div>
  );
};

export default Locations;
