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
import { InfoState$, LoginsState$, ProjectState$ } from "../../redux/selectors";
import * as actions from "../../redux/actions";
import {
  Button,
  Card,
  Col,
  Divider,
  PageHeader,
  Radio,
  Row,
  Space,
  Typography,
  Result,
} from "antd";

const { Content, Sider, Header } = Layout;
export default function HomePage() {
  const classes = useStyles();
  const [currentId, setCurrentId] = React.useState({
    ThongBao: "Tất cả",
  });

  // const [ data, setdata ] = React.useState({
  //   Don: "Đơn gia hạn",
  // });
  console.log("currentId", currentId);

  const user = useSelector(LoginsState$);
  const info = useSelector(InfoState$);
  const project = useSelector(ProjectState$);

  const dispatch = useDispatch();
  const openPostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
    dispatch(actions.getProjects.getProjectsRequest());
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <Headerbar />
      </Header>
      <Layout>
        <Sider
          width={300}
          style={{ padding: "0px 0px 0px 24px", background: "#F0F2F5" }}
          className="site-layout-sider"
        >
          <div className="site-card-border-less-wrapper">
            <Space direction="vertical">
              <Card
                title="Loại thông báo"
                bordered={false}
                style={{ width: 250 }}
              >
                <Radio.Group defaultValue={1}>
                  <Space direction="vertical">
                    <Radio
                      value={1}
                      onClick={() =>
                        setCurrentId({ ...currentId, ThongBao: "Tất cả" })
                      }
                    >
                      Tất cả
                    </Radio>
                    <Radio
                      value={2}
                      onClick={
                        // () =>{check = "Đơn gia hạn"}
                        () => setCurrentId({ ...currentId, ThongBao: "Trường" })
                      }
                    >
                      Trường
                    </Radio>
                    <Radio
                      value={3}
                      onClick={
                        // () =>{check = "Đơn hủy"}
                        () => setCurrentId({ ...currentId, ThongBao: "Khoa" })
                      }
                    >
                      Khoa
                    </Radio>
                  </Space>
                </Radio.Group>
              </Card>
            </Space>
          </div>
        </Sider>
        <Content>
          <PostList   setCurrentId={currentId.ThongBao} />
          <PostModal />
          {user.role === "Giang Vien" ? null : (
            <Fab
              color="primary"
              className={classes.fab}
              onClick={openPostModal}
            >
              <AddIcon />
            </Fab>
          )}
        </Content>
        {/* <Content>
              {data.Don ==="Đơn gia hạn" ?  <ExtendList/>  :<CancelList/>}
            </Content> */}
      </Layout>
      {/* <Content>
        <PostList />
        <PostModal />
        {user.role === "Giang Vien" ? null : (
          <Fab color="primary" className={classes.fab} onClick={openPostModal}>
            <AddIcon />
          </Fab>
        )}
      </Content> */}
    </Layout>
  );
}
