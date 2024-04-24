import React, { createContext, useEffect, useState } from "react";

export const LocationContext = createContext(null);

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(JSON.parse(localStorage.getItem("crud03-locations")) || []);
  }, []);

  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
