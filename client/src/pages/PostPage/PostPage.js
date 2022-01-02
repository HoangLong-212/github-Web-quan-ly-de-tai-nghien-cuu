import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostState$, UserState$ } from "../../redux/selectors";
import { Layout } from "antd";
import Headerbar from "../../components/Header/HeaderBar/HeaderBar";
import "./style.css";
import moment from "moment";

const { Content, Header } = Layout;

export default function PostPage() {
  const url = window.location.pathname;
  const path = url.split("/").filter((x) => x);

  const posts = useSelector(PostState$);
  console.log("[POSTS]", posts);
  // console.log("[POSTS 1 ]", posts.title);

  const post = posts.find(function (post) {
    return post._id === path[1];
  });

  return (
    <Layout>
      <Header>
        <Headerbar />
      </Header>
      <Content>
        <div className="Post">
        <div className="title">{post.title}</div>
        <div className="timeAndAuthor">
          {moment(post.updatedAt).format("HH:MM MMM DD, YYYY")} - {post.author}
        </div>
        <div className="content">{post.content}</div>
        </div>
      </Content>
    </Layout>
  );
}
