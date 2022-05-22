import React from "react";
import {  Space, Typography } from "antd";

const { Title } = Typography;

class MainCard extends React.Component {
  render() {
    return (
      <>
        <Space direction="vertical" align="center" style={{ display: "block" }}>
          <Title level={2}>{this.props.title || ""}</Title>
          {this.props.children}
        </Space>
      </>
    );
  }
}

export default MainCard;
