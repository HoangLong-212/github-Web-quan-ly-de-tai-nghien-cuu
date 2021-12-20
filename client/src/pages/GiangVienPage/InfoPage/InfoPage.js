import React, { useCallback, useEffect, useState } from "react";
import { Layout, Row, Col, Space, Button, Descriptions, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showInfoModal } from "../../../redux/actions";
import useSelection from "antd/lib/table/hooks/useSelection";
import { InfoState$, LoginsState$} from "../../../redux/selectors";
import* as actions from "../../../redux/actions";
import InfoModal from "../../../components/InfoModal/InfoModal"
import { PercentageOutlined } from "@ant-design/icons";
import moment from "moment";
import Grid from "antd/lib/card/Grid";
const { Content } = Layout;


export default function InfoPage() {

  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  //region Modal

  const openInfoModal = React.useCallback(() => {

    console.log("Đã bấm");
    dispatch(showInfoModal());
  }, [dispatch]);

  //region Data Info
  

  const Info = useSelector(InfoState$); 

  const users = useSelector(LoginsState$);

  // usename: 18521801 pw:....
  
  console.log("userrr", users);

  const _info = Info.find(function(info) {
    return info.username === users.username;
  })

  console.log( "[Info]",Info); 

  console.log( "[Info - name]", _info); //hoang
  
  

  // const [dataSource, setDataSource] = useState(Info);

  React.useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
  }, [dispatch]);

  // React.useEffect(() => {
  //   if(Info) setDataSource(Info);
  // }, [Info])
  
  const body = (
    <Descriptions title="User Info" 
    // dataSource={dataSource}
    // setCurrentId={setCurrentId}
    >
      <Descriptions.Item label="Họ và tên">
        {_info.name}
        </Descriptions.Item>
      <Descriptions.Item label="Ngày sinh" >
        {/* {_info.dateOfBirth}  */}
        {moment(_info.dateOfBirth).format("DD/MM/YYYY")}
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
      <Descriptions.Item label="Ngành"> 
      {_info.faculty}
       </Descriptions.Item>
      <Descriptions.Item label="Diện hợp đồng"> 
      {_info.contract}
       </Descriptions.Item>
  </Descriptions>
  )

  return (
    <Layout >
      <Content style={{ padding: "17px 24px 24px" }}>
        <InfoModal></InfoModal>
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
    {/* <Layout > */}
      {/* <Descriptions title="User Info" 
    // dataSource={dataSource}
    // setCurrentId={setCurrentId}
    >
      <Descriptions.Item label="Họ và tên">{info.name}</Descriptions.Item>
      <Descriptions.Item label="Ngày sinh">{info.dateOfBirth}</Descriptions.Item>
      <Descriptions.Item label="Số điện thoại"> {info.phoneNumber} </Descriptions.Item>
      <Descriptions.Item label="Email"> {info.email} </Descriptions.Item>
      <Descriptions.Item label="Trình độ"> {info.level} </Descriptions.Item>
      <Descriptions.Item label="Mã khoa">  {info.facultyId} </Descriptions.Item>
      <Descriptions.Item label="Ngành"> {info.faculty} </Descriptions.Item>
      <Descriptions.Item label="Diện hợp đồng"> {info.contract} </Descriptions.Item>
  </Descriptions> */}
  {/* </Layout> */}
          {body}
        </div>
      </Content>
    </Layout>
  );
}
