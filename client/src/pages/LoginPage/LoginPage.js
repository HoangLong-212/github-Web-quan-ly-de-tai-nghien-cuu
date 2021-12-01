import React from "react";
import Login from "../../components/Login/Login";
import { Layout, Row, Col } from "antd";
import "./style.css";

const { Content } = Layout;

export default function LoginPage() {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Col>
        <Login />
      </Col>
    </Row>
  );
}
