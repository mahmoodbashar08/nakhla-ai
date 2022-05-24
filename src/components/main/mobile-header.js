import { Link } from "react-router-dom";
import { Col, Row, Layout, Menu, Image } from "antd";
import { HomeFilled, MenuOutlined, CompassFilled } from "@ant-design/icons";
import Logo from "../../images/logo.png";

const { Header } = Layout;

function MobileHeader() {
  return (
    <Header
      style={{
        zIndex: 1,
        background: "#fff",
        width: "100%",
        padding: 0,
      }}
    >
      <Row justify="space-between" align="middle">
        <Col span={4}>
          <Menu
            expandIcon={<MenuOutlined />}
            overflowedIndicator={<MenuOutlined />}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "home",
                icon: <HomeFilled />,
                label: <Link to="/"> Home</Link>,
              },
              {
                key: "map",
                icon: <CompassFilled />,
                label: <Link to="/map">Map</Link>,
              },
            ]}
          />
        </Col>
        <Col span={20}>
          <Image
            className="logo"
            src={Logo}
            preview={false}
            style={{ width: "3rem", height: "3rem" }}
          />
        </Col>
      </Row>
    </Header>
  );
}

export default MobileHeader;
