import React from "react";
import { Button, Layout } from "antd";
import HeaderBar from "../../components/Header/HeaderBar/HeaderBar";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { LoginsState$ } from "../../redux/selectors";
import CouncilList from "../../components/Lists/CouncilList/CouncilList";
import CouncilModal from "../../components/Modal/CouncilModal/CouncilModal";

const { Content, Header } = Layout;
export default function CouncilPage() {
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
       <CouncilList/>
       <CouncilModal/>
        {user.role === "Giang Vien" ? null : (
           <Button type="primary" className="DangKy" onClick={openProjectModal}>
           Tạo hội đồng mới
         </Button>
        )} 
      </Content>
    </Layout>
  );
}
