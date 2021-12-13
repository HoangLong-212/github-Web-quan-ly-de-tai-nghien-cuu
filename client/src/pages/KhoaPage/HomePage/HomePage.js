import React from "react";
import {  Layout } from "antd";
import {  useDispatch } from "react-redux";
import {  showModal } from "../../../redux/actions";
import HeaderBar from "../../../components/Header/HeaderBar/HeaderBar";
import PostList from "../../../components/PostList/PostList";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from '../../AdminPage/HomePage/style';
import PostModal from "../../../components/Modal/PostModal/PostModal";


const { Content, Header } = Layout;

export default function HomePage() {
  const classes = useStyles();

  const dispatch = useDispatch();

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
