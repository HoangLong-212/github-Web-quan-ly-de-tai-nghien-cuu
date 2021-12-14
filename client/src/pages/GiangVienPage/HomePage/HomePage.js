import React from "react";
import {  Layout } from "antd";
import HeaderBar from "../../../components/Header/HeaderBar/HeaderBar";
import PostList from "../../../components/PostList/PostList";




const { Content, Header } = Layout;

export default function HomePage() {

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
