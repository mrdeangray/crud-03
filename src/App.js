import { Route, Routes } from "react-router-dom";
import "./App.css";
import Locations from "./components/ReadLocations";
import CreateLocation from "./components/CreateLocation";
import UpdateLocation from "./components/UpdateLocation";
import DeleteLocation from "./components/DeleteLocation";
import LocationProvider from "./components/context/LocationProvider";

function App() {
  return (
    <div className="App">
      <LocationProvider>
        <Routes>
          <Route exact path="/" element={<Locations />} />
          <Route exact path="/create" element={<CreateLocation />} />
          <Route exact path="/update/:location" element={<UpdateLocation />} />
          <Route exact path="/delete/:location" element={<DeleteLocation />} />
        </Routes>
      </LocationProvider>
    </div>
  );
}

export default App;
