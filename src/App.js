import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Map from "./pages/map";
import { Col, Row } from "antd";
function App() {
  return (
    <div className="App">
      <Row justify="center"  >
        <Col span={23}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="map" element={<Map />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
