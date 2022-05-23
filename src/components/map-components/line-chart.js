import React from "react";
import Chart from "react-apexcharts";
import { Row, Col, Space, Typography } from "antd";
import MainCard from "../main/main-card";

const { Title } = Typography;

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "line-bar",
          width: "100%",
          height: "auto",
        },

        xaxis: {
          categories: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        },
        stroke: {
          width: 1,
        },
        markers: {
          size: 5,
        },
      },
    };
  }

  render() {
    return (
      <>
        <MainCard
          title="CO2 Daily Chart"
          children={
            <Chart
              options={this.state.options}
              series={[{ name: "co2", data: this.props.series }]}
              type="line"
            />
          }
        />
      </>
    );
  }
}

export default LineChart;
