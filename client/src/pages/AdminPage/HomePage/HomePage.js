import React, { useState } from "react";
import {  Layout } from "antd";
import { useHistory } from "react-router";
import {
  LoginsState$,
  LoginsState_isAuthenticated$,
} from "../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { login, showModal } from "../../../redux/actions";
import HeaderBar from "../../../components/Header/HeaderBar/HeaderBar";
import PostList from "../../../components/PostList/PostList";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from './style';
import PostModal from "../../../components/Modal/PostModal/PostModal";

const { Content, Header } = Layout;

export default function HomePage() {
  const classes = useStyles();
  // const history = useHistory();

  const dispatch = useDispatch();

  // const users = useSelector(LoginsState$);

  // const isAuthenticated = useSelector(LoginsState_isAuthenticated$);

  // const onClick = React.useCallback(() => {
  //   console.log("long", users);
  //   dispatch(login.logoutRequest());

  //   localStorage.removeItem("access_token");
  //   history.push("/");
  // });
  const openPostModal = React.useCallback(()=>{
    dispatch(showModal());
  },[dispatch])

  return (
    <Layout>
      <Header>
        <HeaderBar />
      </Header>
      <Content>
        <PostList />
        <PostModal/>
        <Fab color ="primary" className={classes.fab} onClick={openPostModal}>
          <AddIcon/>
        </Fab>
      </Content>   
    </Layout>
  );
}
