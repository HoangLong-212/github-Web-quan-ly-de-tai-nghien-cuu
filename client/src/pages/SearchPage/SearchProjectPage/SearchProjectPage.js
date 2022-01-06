import React, { useEffect, useState, useContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InfoState$,
  LoginsState$,
  ProjectState$,
  UserState$,
} from "../../../redux/selectors";
import {
  Layout,
  Typography,
  Result,
  PageHeader,
} from "antd";
import Headerbar from "../../../components/Header/HeaderBar/HeaderBar";
import * as actions from "../../../redux/actions";
import ProjectTable from "../../../components/Table/SearchTable/SearchProjectTable/ProjectTable"



const { Content, Sider, Header } = Layout;
const { Text } = Typography;

export default function SearchProjectPage() {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  //#endregion

  //#region Data User
  const User = useSelector(UserState$);

  const currentUser = useSelector(LoginsState$);

  const project = useSelector(ProjectState$);

  const dataProject =project.filter(
    (project) => project.idTeam.idChuNhiem.facultyId.username === currentUser.username //KH001
  );

  console.log("dataProject", dataProject)
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

  const [dataSource, setDataSource] = useState(project);

  const [dataSourceFaculty, setDataSourceFaculty] = useState(dataProject);

  console.log("DataSourceFaculty", dataSourceFaculty);

  console.log("datasource", dataSource);

  useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
    dispatch(actions.getUser.getUserRequest());
    dispatch(actions.getFaculty.getFacultyRequest());
    dispatch(actions.getProjects.getProjectsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (project) setDataSource(project);
  }, [project]);

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
                <ProjectTable
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
              <ProjectTable
                dataSource={dataSource}
                setCurrentId={setCurrentId}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
}
