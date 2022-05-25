import React from "react";

import { HeartFilled } from "@ant-design/icons";
function Footer() {
  return (
    <div className="Footer">
      made with <HeartFilled className="Icon" /> by
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/agritech.mosul/"
      >
        {" "}
        Agri-Tech
      </a>
      <br />
      templete by{" "}
      <a href="https://www.behance.net/boguslawpodhalicz">Bogusław Podhalicz</a>
    </div>
  );
}

export default Footer;
