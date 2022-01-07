import React, { useEffect, useState, useContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InfoState$,
  LoginsState$,
  UserState$,
} from "../../../redux/selectors";
import {
  Layout,
  Typography,
  Result,
} from "antd";
import Headerbar from "../../../components/Header/HeaderBar/HeaderBar";
import * as actions from "../../../redux/actions";
import LecturerTable from "../../../components/Table/SearchTable/SearchLecturerTable/LecturerTable";



const { Content, Sider, Header } = Layout;
const { Text } = Typography;

export default function SearchLecturerPage() {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  //#endregion

  //#region Data User
  const User = useSelector(UserState$);

  const currentUser = useSelector(LoginsState$);

  const info = useSelector(InfoState$);

  const dataInfo = info.filter(
    (info) => info.facultyId.username === currentUser.username //KH001
  );
  // const dataUser = [];

  // User.forEach((element) => {
  //   dataInfo.forEach((info) => {
  //     if (element.username === info.username) {
  //       dataUser.push(element);
  //       return;
  //     }
  //   });
  // });

  // const isShow = useSelector(UserModalState$);

  const [dataSource, setDataSource] = useState(info);

  const [dataSourceFaculty, setDataSourceFaculty] = useState(dataInfo);

  console.log("DataSourceFaculty", dataSourceFaculty);

  console.log("datasource", dataSource);

  useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
    dispatch(actions.getUser.getUserRequest());
    dispatch(actions.getFaculty.getFacultyRequest());
  }, [dispatch]);

  useEffect(() => {
    if (info) setDataSource(info);
  }, [info]);

  // console.log("dataSource", dataSource);

  if (currentUser.role != "Admin") {
    if (currentUser.role !== "Khoa") {
      if (currentUser.role != "Giang Vien") {
        return (
          <Result
            className="error-page"
            status="error"
            title="Hạn chế quyền truy cập"
            subTitle="Vui lòng kiểm tra lại đường link hoặc tài khoản đăng nhập!"
          />
        );
      }
    } else
      return (
        <Layout>
          <Header>
            <Headerbar />
          </Header>
          <Layout
            style={{
              padding: "24px 24px 0px 24px",
              width: "80%",
              backgroundColor: "#57C0FB",
              borderRadius: "5px",
              position: "absolute",
              top: "8.2%",
              left: "10%",
            }}
          >
            <Content>
              <div className="site-layout-content">
                <LecturerTable
                  dataSource={dataSourceFaculty}
                  setCurrentId={setCurrentId}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      );
  } else
    return (
      <Layout>
        <Header>
          <Headerbar />
        </Header>
        <Layout
          style={{
            padding: "24px 24px 0px 24px",
            width: "80%",
            backgroundColor: "#57C0FB",
            borderRadius: "5px",
            position: "absolute",
            top: "8.2%",
            left: "10%",
          }}
          // type="flex"
        >
          <Content>
            <div className="site-layout-content">
              <LecturerTable
                dataSource={dataSource}
                setCurrentId={setCurrentId}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
}
