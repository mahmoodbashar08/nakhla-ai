import React from "react";
import { Row, Col, Space, Typography } from "antd";
import LineChart from "../components/map-components/line-chart";
import RaidialChart from "../components/map-components/raidial-chart";

const { Title } = Typography;

class Map extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col xxl={18} xl={18} lg={18} md={24} sm={24} xs={24}>
            map
          </Col>
          <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <Row gutter={[0, 20]} align="middle" justify="space-between">
              <Col span={24} className={"card"}>
                <LineChart />
              </Col>
              <Col span={24} className={"card"}>
                <RaidialChart />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Map;
