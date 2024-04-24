import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LocationContext } from "../context/LocationProvider";
import { Link } from "react-router-dom";

const DeleteLocation = () => {
  const { location } = useParams();
  const navigate = useNavigate();
  const { locations, setLocations } = useContext(LocationContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    const newLocations = locations.filter((elem) => elem !== location);
    setLocations(newLocations);
    localStorage.setItem("crud03-locations", JSON.stringify(newLocations));

    setIsDeleting(true);
    setTimeout(() => {
      navigate(`/`);
      setIsDeleting(false);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>Delete: {location}</h4>
      <button onClick={handleDelete}>Delete: {location} </button>
      <p>{locations.join(", ")}</p>
      {isDeleting ? <p>Deleting</p> : <p></p>}
    </div>
  );
};

export default DeleteLocation;
