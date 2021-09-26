import React from 'react'
import { Typography, Space } from 'antd';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Crypto into the Cryptoverse
          <br />
          All Rights Reserved @ 2021
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    );
}

export default Footer;
