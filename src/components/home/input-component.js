import React from "react";
import "./home.scss";
import { Col, Row, Typography, Input } from "antd";
import { InputEndpoint } from "../../constants/api";

import axios from 'axios'
const { Title } = Typography;
function MyInputComponent({co2}) {
  const [data, setData] = React.useState(0);
  const [palms,setPalms] = React.useState(0);
  const handleOnChange =async (e) => {
     const palms = e.target.value;
     setPalms(palms);
    const response = await axios.post(InputEndpoint,{palms,co2:co2});
    setData(response.data.result)
    
  };
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
              onChange={(e) => handleOnChange(e)}
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
            <Title level={5}>{palms ==0 ?co2: data}</Title>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MyInputComponent;
