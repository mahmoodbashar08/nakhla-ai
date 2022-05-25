import { Row, Col } from "antd";
import React from "react";
import Wellcome from "../components/home/wellcome";
import MyInputComponent from "../components/home/input-component";
import ApexChart from "../components/home/live-co2";
import AiComponent from "../components/home/ai";
import TimeComponent from "../components/home/time-component";
import MainCard from "../components/main/main-card";
import { HomeEndpoint } from "../constants/api";

class Home extends React.Component {
  state = {
    recommended: 0,
    live_co2: 0,
    concentration: 0,
  };

  fetchData() {
    fetch(HomeEndpoint)
      .then((response) => {
        return response.json();
      })
      .then(async (responseData) => {
        this.setState(responseData);
      });
  }

  componentDidMount() {
    this.fetchData();
    setInterval(() => {
      this.fetchData();
    }, 5000);
  }

  render() {
    return (
      <>
        <Row
          justify="space-evenly"
          gutter={[{ xs: 0, sm: 0, md: 0, lg: 0, xl: 16 }, 20]}
        >
          <Col xxl={18} xl={18} lg={18} md={24} sm={24} xs={24}>
            <Row gutter={[0, 20]} justify="center">
              <Col span={24}>
                <Wellcome />
              </Col>
              <Col span={24} className="card">
                <MainCard
                  title="Live CO2 Concentration"
                  children={<ApexChart percent={this.state.live_co2} />}
                />
              </Col>
            </Row>
          </Col>

          <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <Row justify="space-between" gutter={[0, 20]}>
              <Col span={24}>
                <TimeComponent />
              </Col>
              <Col span={24}>
                <AiComponent
                  recommended={this.state.recommended}
                  co2={this.state.concentration}
                />
              </Col>
              <Col span={24}>
                <MyInputComponent />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
