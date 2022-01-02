import React, { useCallback, useEffect, useState } from "react";
import { Layout, Row, Col, Space, Button, Descriptions, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showInfoModal } from "../../../redux/actions";
import { InfoModalState$, InfoState$, LoginsState$} from "../../../redux/selectors";
import* as actions from "../../../redux/actions";
import InfoModal from "../../../components/InfoModal/InfoModal"
import moment from "moment";
import { Header } from "antd/lib/layout/layout";
import Headerbar from "../../../components/Header/HeaderBar/HeaderBar";

const { Content } = Layout;


export default function InfoPage() {

  const dispatch = useDispatch();

  const openInfoModal = React.useCallback(() => {
    dispatch(showInfoModal());
  }, [dispatch]);

  //region Data Info

  const info = useSelector(InfoState$);

  const users = useSelector(LoginsState$);

  const _info = info.find(function (info) {
    return info.username === users.username;  
  });

  console.log("_info", _info)

  const body = (
    <Descriptions title="Thông tin cá nhân" 
    >
      <Descriptions.Item label="Họ và tên">
        {_info.name}
        </Descriptions.Item>
      <Descriptions.Item label="Ngày sinh" >
        {moment(_info.dateOfBirth).format("DD/MM/YYYY")}
        {/* {_info.dateOfBirth} */}
      </Descriptions.Item>
      <Descriptions.Item label="Số điện thoại">
         {_info.phoneNumber} 
      </Descriptions.Item>
      <Descriptions.Item label="Email">
         {_info.email}
       </Descriptions.Item>
      <Descriptions.Item label="Trình độ">
         {_info.level}
       </Descriptions.Item>
      <Descriptions.Item label="Mã khoa">  
      {_info.facultyId}
       </Descriptions.Item>
      <Descriptions.Item label="Diện hợp đồng"> 
      {_info.contract}
       </Descriptions.Item>
  </Descriptions>
  )

  return (
    <Layout >
      <Header>
        <Headerbar/>
      </Header>
      <Content style={{ padding: "17px 24px 24px" }}>
        {/* <InfoModal></InfoModal> */}
        <div className="layout-content">
          <Row justify="end">
            <Space direction="horizontal">
              <Button 
              type="primary"
              onClick={openInfoModal}>
                Chỉnh sửa thông tin
              </Button>
            </Space>
          </Row>
          {body}
        </div>
      </Content>
    </Layout>
  );
}
