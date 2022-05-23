import React from "react";
import { Row, Col } from "antd";
class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <Row align="start">
            <Col span={24}>logo</Col>
            <Col span={24}>Home</Col>
            <Col span={24}>Map</Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Sidebar;
