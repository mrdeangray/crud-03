import React, { useContext, useState } from "react";
import { LocationContext } from "../context/LocationProvider";
import { Link } from "react-router-dom";

const CreateLocation = () => {
  const [inputValue, setInputValue] = useState("");
  const { locations, setLocations } = useContext(LocationContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLocations = [...locations, inputValue];
    setLocations(newLocations);
    setInputValue("");
    localStorage.setItem("crud03-locations", JSON.stringify(newLocations));
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>CreateLocation</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
      <p>{locations.join(", ")}</p>
    </div>
  );
};

export default CreateLocation;
