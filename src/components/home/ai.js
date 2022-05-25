import React from "react";
import { Row, Col, Typography } from "antd";
import "./home.scss";

const { Title } = Typography;

function AiComponent({palms,co2,live}) {
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
              {palms || 0}
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
            <Title level={4}>{palms ==0? live: co2}</Title>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default AiComponent;
