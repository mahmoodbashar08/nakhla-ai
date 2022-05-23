import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Map from "./pages/map";
import Sidebar from "./components/main/sidebar";

import { Col, Row } from "antd";
function App() {
  return (
    <div className="App">
      <Row justify="center" align="middle">
        <Col xxl={1} xl={1} lg={1} md={0} sm={0} xs={0}>
          <Sidebar />
        </Col>
        <Col xxl={23} xl={23} lg={23} md={24} sm={24} xs={24}>
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
