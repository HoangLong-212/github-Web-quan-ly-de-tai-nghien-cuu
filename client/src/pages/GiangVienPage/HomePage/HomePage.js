<<<<<<< HEAD
import React from "react";
import {  Layout } from "antd";
import HeaderBar from "../../../components/Header/HeaderBar/HeaderBar";
import PostList from "../../../components/PostList/PostList";
=======
import React, { useState } from "react";
import { Layout } from "antd";
import { LoginsState$ } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> origin/Hon



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