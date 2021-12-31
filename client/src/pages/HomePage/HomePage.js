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
import { LoginsState$ } from "../../redux/selectors";

const { Content, Header } = Layout;
export default function HomePage() {
  const classes = useStyles();

  const user = useSelector(LoginsState$);

  const dispatch = useDispatch();
  const openPostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <Headerbar />
      </Header>
      <Content>
        <PostList />
        <PostModal />
        {user.role === "GiangVien" ? null : (
          <Fab color="primary" className={classes.fab} onClick={openPostModal}>
            <AddIcon />
          </Fab>
        )}
      </Content>
    </Layout>
  );
}
