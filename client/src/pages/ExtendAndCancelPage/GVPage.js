import React from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";

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

const { Content, Sider, Header } = Layout;

export default function GVPage() {
  const [data, setdata] = React.useState({
    Don: "Đơn gia hạn",
  });

  return (
    <Layout>
      <Header>
        <Headerbar />
      </Header>
      <Layout>
        <Content style={{ padding: "0px 0px 0px 73px" }}>
          <PageHeader
            onBack={() => window.history.back()}
            className="site-page-header"
            title="Soạn đơn"
          />
        </Content>
      </Layout>
      <Layout>
        <Sider
          width={300}
          style={{ padding: "0px 0px 0px 24px", background: "#F0F2F5" }}
          className="site-layout-sider"
        >
          <div className="site-card-border-less-wrapper">
            <Space direction="vertical">
              <Card title="Loại đơn" bordered={false} style={{ width: 250 }}>
                <Radio.Group defaultValue={1}>
                  <Space direction="vertical">
                    <Radio
                      value={1}
                      onClick={() => setdata({ ...data, Don: "Đơn gia hạn" })}
                    >
                      Đơn gia hạn
                    </Radio>
                    <Radio
                      value={2}
                      onClick={() => setdata({ ...data, Don: "Đơn hủy" })}
                    >
                      Đơn hủy
                    </Radio>
                  </Space>
                </Radio.Group>
              </Card>
            </Space>
          </div>
        </Sider>
        <Content>
          {data.Don === "Đơn gia hạn" ? <ExtendForm /> : <CancelForm />}
        </Content>
      </Layout>
    </Layout>
  );
}
