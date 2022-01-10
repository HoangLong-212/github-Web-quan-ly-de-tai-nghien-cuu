import React, { useCallback, useEffect, useState } from "react";
import {
  Layout,
  Row,
  Col,
  Space,
  Button,
  Descriptions,
  PageHeader,
  Input,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showInfoModal } from "../../../redux/actions";
import {
  FacultyState$,
  InfoModalState$,
  InfoState$,
  LoginsState$,
} from "../../../redux/selectors";
import * as actions from "../../../redux/actions";
import InfoModal from "../../../components/InfoModal/InfoModal";
import moment from "moment";
import { Header } from "antd/lib/layout/layout";
import Headerbar from "../../../components/Header/HeaderBar/HeaderBar";
import "./style.css";
const { Content } = Layout;

export default function InfoPage() {
  const dispatch = useDispatch();

  const openInfoModal = useCallback(() => {
    dispatch(showInfoModal());
  }, [dispatch]);

  const info = useSelector(InfoState$);

  const faculty = useSelector(FacultyState$);

  const users = useSelector(LoginsState$);

  const _info = info.find(function (info) {
    return info.username === users.username;
  });

  const body = (
    <Descriptions title="Thông tin cá nhân">
      <Descriptions.Item label="Họ và tên">{_info.name}</Descriptions.Item>
      <Descriptions.Item label="Ngày sinh">
        {moment(_info.dateOfBirth).format("DD/MM/YYYY")}
      </Descriptions.Item>
      <Descriptions.Item label="Số điện thoại">
        {_info.phoneNumber}
      </Descriptions.Item>
      <Descriptions.Item label="Email">{_info.email}</Descriptions.Item>
      <Descriptions.Item label="Trình độ">{_info.level}</Descriptions.Item>
      <Descriptions.Item label="Khoa">{_info.facultyId.name}</Descriptions.Item>
      <Descriptions.Item label="Diện hợp đồng">
        {_info.contract}
      </Descriptions.Item>
    </Descriptions>
  );

  return (
    <Layout className="layout">
      <Header>
        <Headerbar />
      </Header>
      <Layout>
        <Content>
          <PageHeader
            onBack={() => window.history.back()}
            className="site-page-header"
            title="Thông tin cá nhân"
          />
        </Content>
      </Layout>
      <Content>
        <InfoModal />
        <div className="layout-content">
          <Row justify="end" className="button">
            <Space direction="horizontal">
              <Button type="primary" onClick={openInfoModal}>
                Chỉnh sửa thông tin
              </Button>
            </Space>
          </Row>
          <div className="body">{body}</div>
        </div>
      </Content>
    </Layout>
  );
}
