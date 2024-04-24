import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { LocationContext } from "../context/LocationProvider";
import { useNavigate } from "react-router-dom";

const UpdateLocation = () => {
  const { location } = useParams();
  const navigate = useNavigate(`/`);
  const [inputValue, setInputValue] = useState(location);
  const { locations, setLocations } = useContext(LocationContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLocations = [...locations];
    const startIndex = newLocations.indexOf(location);
    newLocations.splice(startIndex, 1, inputValue);
    setLocations(newLocations);
    setInputValue("");
    localStorage.setItem("crud03-locations", JSON.stringify(newLocations));
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate(`/`);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>

      <h4> Update: {location}</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
      <p>{locations.join(", ")}</p>
      {isUpdating && <p>Updating...</p>}
    </div>
  );
};

export default UpdateLocation;
