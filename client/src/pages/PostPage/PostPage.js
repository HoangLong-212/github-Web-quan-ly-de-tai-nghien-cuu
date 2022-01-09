import React from "react";
import { useSelector } from "react-redux";
import { PostState$ } from "../../redux/selectors";
import { Layout, PageHeader } from "antd";
import Headerbar from "../../components/Header/HeaderBar/HeaderBar";
import "./style.css";
import moment from "moment";

const { Content, Header } = Layout;

export default function PostPage() {
  const url = window.location.pathname;
  const path = url.split("/").filter((x) => x);


  const posts = useSelector(PostState$);


  const post = posts.find(function (post) {
    return post._id === path[1];
  });

  return (
    <Layout>
      <Header>
        <Headerbar />
      </Header>
      <Layout>
          <Content>
            <PageHeader
              onBack={() => window.history.back()}
              className="site-page-header"
              title="Thông báo"
            />
          </Content>
        </Layout>
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
