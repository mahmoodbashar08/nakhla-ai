import React from "react";
import { Row, Col } from "antd";
import LineChart from "../components/map/line-chart";
import RaidialChart from "../components/map/raidial-chart";
import MapCard from "../components/map/mapCard";

class Map extends React.Component {
  state = {
    data: null,
  };

  render() {
    const setCurrentData = (location) => {
      this.setState({ data: location });
    };
    const { data } = this.state;
    const dailyChartSeries =
      data && data !== null ? data.data.dailyChartSeries : [];

    const co2PercentData =
      data && data !== null ? data.data.co2Concentration : 0;
    return (
      <>
        <Row
          justify="space-evenly"
          gutter={[{ xs: 0, sm: 0, md: 0, lg: 0, xl: 16 }, 0]}
        >
          <Col xxl={18} xl={18} lg={18} md={24} sm={24} xs={24}>
            <MapCard changeData={setCurrentData} />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <Row gutter={[0, 20]} align="middle" justify="space-between">
              <Col span={24} className={"card"}>
                <LineChart series={dailyChartSeries} />
              </Col>
              <Col span={24} className={"card"}>
                <RaidialChart percent={co2PercentData} />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Map;
