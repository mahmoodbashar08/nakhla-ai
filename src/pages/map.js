import React from "react";
import { Row, Col } from "antd";


class Map extends React.Component {
  render() {
    return (
      <>
         <Row>
         <Col xxl={18} xl={18} lg={18} md={24} sm={24} xs={24}>
             map
         </Col>
         <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <Row>
                <Col span={24}>
                    card 1
                </Col>
                <Col span={24}>
                    card 2
                    </Col>
            </Row>
         </Col>
        </Row>
      </>
    );
  }
}

export default Map;
