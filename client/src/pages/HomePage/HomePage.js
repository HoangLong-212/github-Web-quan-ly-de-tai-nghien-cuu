import React from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./style";
import Headerbar from "../../components/Header/HeaderBar/HeaderBar";
import PostList from "../../components/Lists/PostList/PostList";
import PostModal from "../../components/Modal/PostModal/PostModal";
import { showModal } from "../../redux/actions";
import { InfoState$, LoginsState$ } from "../../redux/selectors";
import *as actions from "../../redux/actions"

const { Content, Header } = Layout;
export default function HomePage() {
  const classes = useStyles();

  const user = useSelector(LoginsState$);
  const info = useSelector(InfoState$);

  const dispatch = useDispatch();
  const openPostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <Headerbar />
      </Header>
      <Content>
        <PostList />
        <PostModal />
        {user.role === "Giang Vien" ? null : (
          <Fab color="primary" className={classes.fab} onClick={openPostModal}>
            <AddIcon />
          </Fab>
        )}
      </Content>
    </Layout>
  );
}
