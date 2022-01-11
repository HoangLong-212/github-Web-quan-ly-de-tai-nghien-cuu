import React, { useEffect, useState, useContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InfoState$,
  LoginsState$,
  ProjectState$,
  ReportsState$,
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
import ReportTable from "../../../components/Table/SearchTable/SearchReportTable/ReportTable";



const { Content, Sider, Header } = Layout;
const { Text } = Typography;

export default function SearchReportPage() {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  //#endregion

  //#region Data User

  const report = useSelector(ReportsState$);

  const [dataSource, setDataSource] = useState(report);

  console.log("datasource", dataSource);

  useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
    dispatch(actions.getUser.getUserRequest());
    dispatch(actions.getFaculty.getFacultyRequest());
    dispatch(actions.getProjects.getProjectsRequest());
    dispatch(actions.getCouncils.getCouncilsRequest());
    dispatch(actions.getReports.getReportsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (report) setDataSource(report);
  }, [report]);

  // console.log("dataSource", dataSource);

    return (
      <Layout>
        <Header>
          <Headerbar />
        </Header>
        <Layout>
          <Content style={{ padding: "0px 0px 0px 73px" }}>
            <PageHeader
              onBack={() => window.history.back()}
              className="site-page-header"
              title="Tra cứu báo cáo nghiệm thu"
            />
          </Content>
        </Layout>
        <Layout
          style={{
            padding: "24px 24px 0px 24px",
            width: "80%",
            backgroundColor: "#57C0FB",
            borderRadius: "5px",
            position: "absolute",
            top: "19.3%",
            left: "10%",
          }}
          // type="flex"
        >
          <Content>
            <div className="site-layout-content">
              <ReportTable
                dataSource={dataSource}
                setCurrentId={setCurrentId}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
}
