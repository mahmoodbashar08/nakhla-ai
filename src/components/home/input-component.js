import React from "react";
import "./home.scss";
import { Col, Row, Typography, Input } from "antd";
import { InputEndpoint } from "../../constants/api";
const { Title } = Typography;

function MyInputComponent() {
  const [data, setData] = React.useState(0);
  const handleOnChange = (e) => {
    fetch(InputEndpoint, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputValue: e.target.value }),
    })
      .then((response) => {
        return response.json();
      })
      .then(async (responseData) => {
        setData(responseData.data);
      });
  };
  return (
    <Row
      justify={"center"}
      className="card"
      style={{
        padding: "2rem",
        fontWeight: "bold",
      }}
    >
      <Col span={12}>
        <Row justify={"center"}>
          <Col span={24}>
            <Title
              level={5}
              style={{ paddingTop: "1rem", fontFamily: "Baloo Bhai 2" }}
            >
              {" "}
              Enter Number Of Palm Trees
            </Title>
          </Col>
          <Col
            span={24}
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              fontFamily: "Baloo Bhai 2",
            }}
          >
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
            <Title
              level={5}
              style={{ paddingTop: "1rem", fontFamily: "Baloo Bhai 2" }}
            >
              CO2 Concentration
            </Title>
          </Col>
          <Col span={24}>
            <Title
              level={5}
              style={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                fontFamily: "Baloo Bhai 2",
              }}
            >
              {" "}
              {data}
            </Title>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MyInputComponent;
