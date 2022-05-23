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
            <Col span={24}>
              <h1>
                <HelloRawan />
              </h1>
            </Col>
            <Col span={24}>
              <h1>
                <div className="ApexChart">
                  <ApexChart />
                </div>
              </h1>
            </Col>
          </Col>

          <Col xxl={6} xl={6} lg={6} md={22} sm={22} xs={22}>
            <Col span={24}>
              <h1>
                <TimeComponent />
              </h1>
            </Col>
            <Col span={24}>
              <h1>
                <AiComponent />
              </h1>
            </Col>
            <Col span={24}>
              <h1>
                <MyInputComponent />
              </h1>
            </Col>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
