import React from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ExtendList from "../../components/Lists/ExtendList/ExtendList"
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Headerbar from "../../components/Header/HeaderBar/HeaderBar";
import PostList from "../../components/Lists/PostList/PostList";
import PostModal from "../../components/Modal/PostModal/PostModal";
import { showModal } from "../../redux/actions";
import { InfoState$, LoginsState$, ProjectState$ } from "../../redux/selectors";
import * as actions from "../../redux/actions";
import ExtendForm from "../../components/Form/ExtendForm";
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
import CancelForm from "../../components/Form/CancelForm";
import CancelList from "../../components/Lists/CancelList/CancelList"

const { Content, Sider, Header } = Layout;
export default function KhoaAndAdminPage() {
    const [ data, setdata ] = React.useState({
        Don: "Đơn gia hạn",
      });
      
    return (
        <Layout>
          <Header>
            <Headerbar />
          </Header>
          <Layout>
          <Content style={{ padding: "0px 0px 0px 73px"}}>
            <PageHeader
              onBack={() => window.history.back()}
              className="site-page-header"
              title="Đơn"
            />
          </Content>
        </Layout>
          <Layout>
            <Sider
              width={300}
              style={{ padding: "0px 0px 0px 100px", background: "#F0F2F5" }}
              className="site-layout-sider"
            >
              <div className="site-card-border-less-wrapper">
                <Space direction="vertical">
                  <Card title="Loại đơn" bordered={false} style={{ width: 250 }}>
                    <Radio.Group defaultValue={1}>
                      <Space direction="vertical">
                        <Radio
                          value={1}
                          onClick={
                            // () =>{check = "Đơn gia hạn"}
                            () => setdata({...data,Don: "Đơn gia hạn"})
                          }
                        >
                          Đơn gia hạn
                        </Radio>
                        <Radio
                          value={2}
                          onClick={
                            // () =>{check = "Đơn hủy"}
                            () => setdata({...data,Don: "Đơn hủy"})
                          }
                        >
                          Đơn hủy
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </Card>
                </Space>
              </div>
            </Sider>
            <Content style={{ padding: "0px 70px 24px 80px" }}>
              {data.Don ==="Đơn gia hạn" ?  <ExtendList/>  :<CancelList/>}
            </Content>
          </Layout>
        </Layout>
      );
}
