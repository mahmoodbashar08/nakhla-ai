import "./App.less";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Map from "./pages/map";
import Sidebar from "./components/main/sidebar";
import { Button, Col, Row } from "antd";
import MobileHeader from "./components/main/mobile-header";

function App() {
  return (
    <div className="App">
      <Row justify="space-evenly" align="start">
        <Col lg={24} xs={0} style={{ height: "1rem" }}></Col>
        <Col xxl={1} xl={1} lg={1} md={0} sm={0} xs={0}>
          <Sidebar />
        </Col>
        <Col xxl={0} xl={0} lg={0} md={24} sm={24} xs={24}>
          <MobileHeader />
        </Col>
        <Col xxl={22} xl={22} lg={22} md={24} sm={24} xs={24}>
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
