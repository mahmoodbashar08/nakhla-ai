import React from "react";
import "./home.scss";
import wellcomeIllustrator from "../../images/Illustration.png";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;
function Wellcome() {
  return (
    <Row
      align="middle"
      className="card"
      justify="space-between"
      wrap={false}
      style={{
        textAlign: "left",
        paddingLeft: "1rem",
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Col style={{ paddingLeft: "1rem" }}>
        <Row align="middle">
          <Col span={24}>
            <Title>Hi Rawan</Title>
          </Col>
          <Col span={24}>
            <Title level={4}>It’s good to see you again.</Title>
          </Col>
        </Row>
      </Col>
      <Col>
        <div>
          <img src={wellcomeIllustrator} alt="Rawan" />
        </div>
      </Col>
    </Row>
  );
}

export default Wellcome;
