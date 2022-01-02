import React from "react";
import {  Layout } from "antd";
import HeaderBar from "../../../components/Header/HeaderBar/HeaderBar";
import PostList from "../../../components/PostList/PostList";
import { InfoState$ } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import* as actions from "../../../redux/actions";



const { Content, Header } = Layout;

export default function HomePage() {

  const dispatch = useDispatch();

  const info = useSelector(InfoState$); //null -> data

  console.log("kk", info)


  React.useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <HeaderBar />
      </Header>
      <Content>
        <PostList />
      </Content>   
    </Layout>
  );
}
