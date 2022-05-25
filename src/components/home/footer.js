import React from "react";
import "./home.scss";
import wellcomeIllustrator from "../../images/Illustration.png";
import { Row, Col, Typography } from "antd";
import { HeartFilled } from "@ant-design/icons";
function Footer() {
  return (
    <div className="Footer">
      made with <HeartFilled /> by
      <a href="https://www.instagram.com/agritech.mosul/"> Agri-Tect</a>
    </div>
  );
}

export default Footer;
