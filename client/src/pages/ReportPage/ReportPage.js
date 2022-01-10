import React from "react";
import { Button, Layout } from "antd";
import HeaderBar from "../../components/Header/HeaderBar/HeaderBar";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { LoginsState$ } from "../../redux/selectors";
import CouncilList from "../../components/Lists/CouncilList/CouncilList";
import CouncilModal from "../../components/Modal/CouncilModal/CouncilModal";
import ReportModal from "../../components/Modal/ReportModal/RepostModal";
import ReportList from "../../components/Lists/ReportList/ReportList";

const { Content, Header } = Layout;
export default function ReportPage() {
  const dispatch = useDispatch();
  const user = useSelector(LoginsState$);
  const openProjectModal = React.useCallback(() => {
    dispatch(actions.showModal());
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <HeaderBar />
      </Header>
      <Content>
        <ReportList />
        <ReportModal />
        <Button type="primary" className="DangKy" onClick={openProjectModal}>
            Tạo báo cáo mới
          </Button>

        {/* {user.role === "Giang Vien" ? null : (
          <Button type="primary" className="DangKy" onClick={openProjectModal}>
            Tạo báo cáo mới
          </Button>
        )} */}
      </Content>
    </Layout>
  );
}
