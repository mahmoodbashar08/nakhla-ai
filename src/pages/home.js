import { Row, Col } from "antd";
import React from "react";
import HelloRawan from "../components/home/helloRawan";
import MyInputComponent from "../components/home/inputcomponent";
import ApexChart from "../components/home/Live_CO2";
import AiComponent from "../components/home/aiComponent";
import TimeComponent from "../components/home/timeComponent";
class Home extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col xxl={18} xl={18} lg={18} md={22} sm={22} xs={22}>
            <Row gutter={[0, 20]} justify="center">
              <Col span={23}>
                <HelloRawan />
              </Col>
              <Col span={23}>
                <div className="ApexChart">
                  <ApexChart />
                </div>
              </Col>
            </Row>
          </Col>

          <Col xxl={6} xl={6} lg={6} md={22} sm={22} xs={22}>
            <Col span={24}>
              <TimeComponent />
            </Col>
            <Col span={24}>
              <AiComponent />
            </Col>
            <Col span={24}>
              <MyInputComponent />
            </Col>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
