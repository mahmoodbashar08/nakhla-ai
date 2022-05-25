import React from "react";
import { Row, Col, Typography } from "antd";
import "./home.scss";

const { Title } = Typography;

function AiComponent(props) {
  return (
    <Row
      justify={"space-between"}
      className="card"
      style={{ padding: "2rem" }}
      align="start"
    >
      <Col span={12} flex="stretch">
        <Row justify={"space-between"}>
          <Col span={24}>
            <Title level={5}>Recommended Palm Trees</Title>
          </Col>
          <Col span={24}>
            <Title level={4} style={{ paddingTop: "1.6rem" }}>
              {props.recommended || 0}
            </Title>
          </Col>
        </Row>
      </Col>

      <Col span={12} flex="stretch">
        <Row justify={"space-between"}>
          <Col span={24}>
            <Title level={5}>CO2 Concentration</Title>
          </Col>
          <Col span={24}>
            <Title level={4}>{props.co2 || 0}</Title>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default AiComponent;
