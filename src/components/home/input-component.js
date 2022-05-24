import React from "react";
import "./home.scss";
import { Col, Row, Typography, Input } from "antd";
const { Title } = Typography;

function MyInputComponent() {
  return (
    <Row justify={"center"} className="card" style={{ padding: "2rem" }}>
      <Col span={12}>
        <Row justify={"center"}>
          <Col span={24}>
            <Title level={5}> Enter Number Of Palm Trees</Title>
          </Col>
          <Col span={24}>
            <Input
              placeholder="10"
              type="number"
              className="InputText"
              width={100}
            />
          </Col>
        </Row>
      </Col>

      <Col span={12}>
        <Row justify={"center"}>
          <Col span={24}>
            <Title level={5}>CO2 Concentration</Title>
          </Col>
          <Col span={24}>
            <Title level={5}> 320</Title>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MyInputComponent;
