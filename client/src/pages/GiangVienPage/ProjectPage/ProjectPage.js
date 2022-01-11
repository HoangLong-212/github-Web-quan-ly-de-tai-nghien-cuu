import React from "react";
import { Button, Card, Layout, PageHeader, Radio, Row, Space } from "antd";
import HeaderBar from "../../../components/Header/HeaderBar/HeaderBar";
import ProjectList from "../../../components/Lists/ProjectList.js/ProjectList";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../redux/actions";
import DangKyModal from "../../../components/Modal/DangKyModal/DangKyModal";
import { LoginsState$ } from "../../../redux/selectors";
import { PlusOutlined } from "@ant-design/icons";

const { Content, Header, Sider } = Layout;
export default function ProjectPage() {
  const dispatch = useDispatch();
  const user = useSelector(LoginsState$);
  const openProjectModal = React.useCallback(() => {
    dispatch(showModal());
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
            title="Đề tài"
          />
        </Content>
      </Layout>
      <Layout >
        <Sider
          width={300}
          style={{ padding: "0px 0px 0px 100px", 
          background: "#F0F2F5"
         }}
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
                    onClick={() =>
                      setCurrentId({ ...currentId, TinhTrang: "Chờ duyệt" })
                    }
                    >
                      Chờ duyệt
                    </Radio>
                    <Radio
                    value={3}
                    onClick={() =>
                      setCurrentId({ ...currentId, TinhTrang: "Đang tiến hành" })
                    }
                    >
                      Đang tiến hành
                    </Radio>
                    <Radio
                    value={4}
                    onClick={() =>
                      setCurrentId({ ...currentId, TinhTrang: "Nghiệm  thu" })
                    }
                    >
                      Nghiệm  thu
                    </Radio>
                    <Radio
                    value={5}
                    onClick={() =>
                      setCurrentId({ ...currentId, TinhTrang: "Không thông qua/Hủy" })
                    }
                    >
                      Không thông qua/Hủy
                    </Radio>
                    <Row justify="end">
                      <Space direction="horizontal">
                      {user.role !== "Giang Vien" ? null : (
                         <Button
                         style={{ margin: "5px 5px 0px 0px", width: "113%" }}
                         icon={<PlusOutlined />}
                         type="primary"
                         onClick={openProjectModal}
                       >
                         Đăng ký đề tài mới
                       </Button>
                      )}
                       
                      </Space>
                    </Row>
                  </Space>
                </Radio.Group>
              </Card>
            </Space>
          </div>
        </Sider>
        <Content style={{ padding: "17px 100px 24px 80px"}}
      
        >
          <div className="site-layout-content">
            <ProjectList  setCurrentId={currentId.TinhTrang} />
            <DangKyModal />
           
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
