import React from "react";
import "./home.scss";
import Clock from "react-live-clock";
import Date from "react-live-clock";

import { Col, Row, Typography } from "antd";
const { Title } = Typography;
function TimeComponent() {
  return (
    <Row justify={"center"} className="card" style={{ padding: "2rem" }}>
      <Col span={12}>
        <Row justify={"center"}>
          <Col span={24}>
            <Title level={4}>Current time</Title>
          </Col>
          <Col span={24}>
            <Clock
              className="LiveTime"
              format={"HH:mm:ss"}
              ticking={true}
              timezone={"Asia/Baghdad"}
            />
          </Col>
        </Row>
      </Col>

      <Col span={12}>
        <Row justify={"center"}>
          <Col span={24}>
            <Title level={4}>Current date</Title>
          </Col>
          <Col span={24}>
            <Date
              className="LiveDate"
              format={"D-MM-YYYY"}
              ticking={true}
              timezone={"Asia/Baghdad"}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default TimeComponent;
