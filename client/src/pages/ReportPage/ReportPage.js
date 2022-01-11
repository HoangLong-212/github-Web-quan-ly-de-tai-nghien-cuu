import React from "react";
import { Button, Card, Layout, Radio, Row, Space,PageHeader } from "antd";
import HeaderBar from "../../components/Header/HeaderBar/HeaderBar";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { LoginsState$ } from "../../redux/selectors";
import CouncilList from "../../components/Lists/CouncilList/CouncilList";
import CouncilModal from "../../components/Modal/CouncilModal/CouncilModal";
import ReportModal from "../../components/Modal/ReportModal/RepostModal";
import ReportList from "../../components/Lists/ReportList/ReportList";
import { PlusOutlined } from "@ant-design/icons";

const { Content, Header, Sider } = Layout;
export default function ReportPage() {
  const dispatch = useDispatch();
  const user = useSelector(LoginsState$);
  const openProjectModal = React.useCallback(() => {
    dispatch(actions.showModal());
  }, [dispatch]);
  const [currentId, setCurrentId] = React.useState({
    TinhTrang: "Tất cả",
  });

  return (
    <Layout>
      <Header>
        <HeaderBar />
      </Header>
      <Layout>
        <Content style={{ padding: "0px 0px 0px 73px" }}>
          <PageHeader
            onBack={() => window.history.back()}
            className="site-page-header"
            title="Báo cáo nghiệm thu"
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
              <Card
                title="Tình trạng"
                bordered={false}
                style={{ width: 250 }}
              >
                <Radio.Group defaultValue={1}>
                  <Space direction="vertical">
                    <Radio
                      value={1}
                      onClick={() =>
                        setCurrentId({ ...currentId, TinhTrang: "Tất cả" })
                      }
                    >
                      Tất cả
                    </Radio>
                    <Radio
                      value={2}
                      onClick={
                       
                        () => setCurrentId({ ...currentId, TinhTrang: "Chờ duyệt" })
                      }
                    >
                      Chờ duyệt
                    </Radio>
                    <Radio
                      value={3}
                      onClick={
                     
                        () => setCurrentId({ ...currentId, TinhTrang: "Thông qua" })
                      }
                    >
                      Thông qua
                    </Radio>
                    {user.role !== "Giang Vien" ? null : (
                      <Row justify="end">
                        <Space direction="horizontal">
                          <Button
                            style={{ margin: "5px 5px 0px 1px", width: "120%" }}
                            icon={<PlusOutlined />}
                            type="primary"
                            onClick={openProjectModal}
                          >
                            Tạo báo cáo mới
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
      <Content 
      style={{ padding: "17px 70px 24px 80px" }}
      >
        <ReportList setCurrentId={currentId.TinhTrang}/>
        <ReportModal />
      
      </Content>
      </Layout>
    </Layout>
  );
}
