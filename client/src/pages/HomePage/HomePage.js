import React from "react";
import { Layout, PageHeader } from "antd";
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
  Radio,
  Row,
  Space,
  Typography,
  Result,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Content, Sider, Header } = Layout;
export default function HomePage() {
  const classes = useStyles();
  const [currentId, setCurrentId] = React.useState({
    ThongBao: "Tất cả",
  });

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
    dispatch(actions.getCouncils.getCouncilsRequest());
    dispatch(actions.getReports.getReportsRequest());
  }, [dispatch]);
  return (
    <Layout>
      <Header>
        <Headerbar />
      </Header>
      <Layout>
        <Sider
          width={300}
          style={{ padding: "0px 0px 0px 100px", background: "#F0F2F5" }}
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
                        
                        () => setCurrentId({ ...currentId, ThongBao: "Trường" })
                      }
                    >
                      Trường
                    </Radio>
                    <Radio
                      value={3}
                      onClick={
                      
                        () => setCurrentId({ ...currentId, ThongBao: "Khoa" })
                      }
                    >
                      Khoa
                    </Radio>
                    {user.role === "Giang Vien" ? null : (
                      <Row justify="end">
                        <Space direction="horizontal">
                          <Button
                            style={{ margin: "5px 5px 0px 1px", width: "120%" }}
                            icon={<PlusOutlined />}
                            type="primary"
                            onClick={openPostModal}
                          >
                            Thêm thông báo
                          </Button>
                        </Space>
                      </Row>
                    )}
                  </Space>
                </Radio.Group>
              </Card>
            </Space>
          </div>
        </Sider>
        <Content style={{ padding: "0px 70px 24px 80px" }}>
          <PostList setCurrentId={currentId.ThongBao} />
          <PostModal />
         
        </Content>
      </Layout>
    </Layout>
  );
}
