import { Row, Col } from "antd";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col xxl={18} xl={18} lg={18} md={22} sm={22} xs={22}>
            <Col span={24}>
              <h1>hello rawan component</h1>
            </Col>
            <Col span={24}>
              <h1>Live CO2 Concentration component</h1>
            </Col>
          </Col>

          <Col xxl={6} xl={6} lg={6} md={22} sm={22} xs={22}>
            <Col span={24}>
              <h1>time component</h1>
            </Col>
            <Col span={24}>
              <h1>ai component</h1>
            </Col>
            <Col span={24}>
              <h1>input component</h1>
            </Col>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
