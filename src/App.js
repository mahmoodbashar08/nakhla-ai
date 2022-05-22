import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Map from "./pages/map";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
