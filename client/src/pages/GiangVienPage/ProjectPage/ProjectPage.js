import React from "react";
import { Button, Layout } from "antd";
import HeaderBar from "../../../components/Header/HeaderBar/HeaderBar";
import ProjectList from "../../../components/Lists/ProjectList.js/ProjectList";
import './style.css'
import { useDispatch } from "react-redux";
import { showModal } from "../../../redux/actions";
import DangKyModal from "../../../components/Modal/DangKyModal/DangKyModal";

const { Content, Header } = Layout;
export default function ProjectPage() {
  const dispatch = useDispatch();
  const openProjectModal = React.useCallback(()=>{
    dispatch(showModal());
  },[dispatch])

  return (
    <Layout>
      <Header>
        <HeaderBar />
      </Header>
      <Content>
        <ProjectList />
        <DangKyModal/>
        <Button type="primary" className="DangKy" onClick={openProjectModal}>Đăng ký đề tài mới</Button>
      </Content>
    </Layout>
  );
}
