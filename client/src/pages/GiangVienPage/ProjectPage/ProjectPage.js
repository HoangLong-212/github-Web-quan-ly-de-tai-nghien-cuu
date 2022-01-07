import React from "react";
import { Button, Layout } from "antd";
import HeaderBar from "../../../components/Header/HeaderBar/HeaderBar";
import ProjectList from "../../../components/Lists/ProjectList.js/ProjectList";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../redux/actions";
import DangKyModal from "../../../components/Modal/DangKyModal/DangKyModal";
import { LoginsState$ } from "../../../redux/selectors";

const { Content, Header } = Layout;
export default function ProjectPage() {
  const dispatch = useDispatch();
  const user = useSelector(LoginsState$);
  const openProjectModal = React.useCallback(() => {
    dispatch(showModal());  
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <HeaderBar />
      </Header>
      <Content>
        <ProjectList />
        <DangKyModal />
        {/* {user.role !== "Giang Vien" ? null : (
          <Button type="primary" className="DangKy" onClick={openProjectModal}>
            Đăng ký đề tài mới
          </Button>
        )} */}
        <Button type="primary" className="DangKy" onClick={openProjectModal}>
            Đăng ký đề tài mới
          </Button>
      </Content>
    </Layout>
  );
}
