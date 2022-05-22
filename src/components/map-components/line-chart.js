import React from "react";
import Chart from "react-apexcharts";
import { Row, Col, Space, Typography } from "antd";

const { Title } = Typography;

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "line-bar",
          width: "100%",
          height: 'auto'
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
      series: [
        {
          name: "series-1",
          data: [0, 250, 50, 750, 800, 700, 400],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Space direction="vertical" align="center" style={{display:'block'}}>
          <Title level={2}>CO2 Daily Chart</Title>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
          />
        </Space>
      </>
    );
  }
}

export default LineChart;
