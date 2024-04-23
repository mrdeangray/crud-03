import React from "react";
import { useParams } from "react-router-dom";

const DeleteLocation = () => {
  const { location } = useParams();
  return <div>Delete: {location}</div>;
};

export default DeleteLocation;
