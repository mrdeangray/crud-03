import React, { createContext, useState } from "react";

export const LocationContext = createContext(null);

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState(["FL", "NY", "GA"]);

  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
