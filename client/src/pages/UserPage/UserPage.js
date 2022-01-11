import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InfoState$,
  LoginsState$,
  UserModalState$,
  UserState$,
} from "../../redux/selectors";
import {
  DatabaseTwoTone,
  FrownTwoTone,
  PlusOutlined,
  EyeOutlined ,
  SmileTwoTone,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Layout,
  PageHeader,
  Radio,
  Row,
  Space,
  Typography,
  Result,
} from "antd";
import Headerbar from "../../components/Header/HeaderBar/HeaderBar";
import * as actions from "../../redux/actions";

import UserTable from "../../components/Table/UserTable/UserTable";
import { configConsumerProps } from "antd/lib/config-provider";
import { showUserModal } from "../../redux/actions";
import UserModal from "../../components/Modal/UserModal/UserModal";

const { Content, Sider, Header } = Layout;
const { Text } = Typography;

export default function UserPage() {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  const openUserModal = useCallback(() => {
    dispatch(showUserModal());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
    dispatch(actions.getUser.getUserRequest());
    dispatch(actions.getFaculty.getFacultyRequest());
  }, [dispatch]);

  const [check, setCheck] = React.useState({
    TinhTrang: "Tắt",
  });
  console.log("checkcheck",check.TinhTrang)

  //#endregion

  //#region Data User
  const User = useSelector(UserState$);

  const currentUser = useSelector(LoginsState$);

  const info = useSelector(InfoState$);

  const dataInfo = info.filter(
    (info) => info.facultyId.username === currentUser.username // username: KH001 CNPM
  );

  const [dataSourceFaculty, setDataSourceFaculty] = useState([]);
  useEffect(() => {
    if (User.length && info.length) {
      const dataUser = [];
      User.forEach((element) => {
        dataInfo.forEach((info) => {
          if (element.username === info.username) {
            dataUser.push(element); // username:.. mk:....
            return;
          }
        });
      });
      setDataSourceFaculty(dataUser);
    }
  }, [User, info]);

  const [dataSource, setDataSource] = useState(User);

  useEffect(() => {
    if (User) setDataSource(User);
  }, [User]);

  if (currentUser.role != "Admin") {
    if (currentUser.role !== "Khoa") {
      if (currentUser.role != "Giang Vien") {
        return (
          <Result
            className="error-page"
            status="error"
            title="Hạn chế quyền truy cập"
            subTitle="Vui lòng kiểm tra lại đường link hoặc tài khoản đăng nhập!"
          />
        );
      }
    } else
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
                title="Tài khoản"
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
                    title="Loại tài khoản"
                    bordered={false}
                    style={{ width: 250 }}
                  >
                    <Radio.Group defaultValue={1}>
                      <Space direction="vertical">
                        <Radio
                          value={1}
                          onClick={() =>
                            setDataSourceFaculty(
                              dataSourceFaculty.filter(
                                (user) => user.role === "Giang Vien"
                              )
                            )
                          }
                        >
                          Giảng viên
                        </Radio>
                        <Row justify="end">
                          <Space direction="vertical">
                            <Button
                              style={{
                                margin: "10px 0px 0px 0px",
                                width: "120%",
                              }}
                              icon={<PlusOutlined />}
                              type="primary"
                              onClick={openUserModal}
                            >
                              Thêm tài khoản
                            </Button>
                            <Button
                              style={{
                                margin: "0px 0px 0px 0px",
                                width: "120%",
                              }}
                              icon={<EyeOutlined  />}
                              type="primary"
                              onClick={() => {
                                check.TinhTrang === "Tắt"
                                  ? setCheck({ ...check, TinhTrang: "Bật" })
                                  : setCheck({ ...check, TinhTrang: "Tắt" });
                              }}
                            >
                              Hiển thị mật khẩu
                            </Button>
                          </Space>
                        </Row>
                      </Space>
                    </Radio.Group>
                  </Card>
                </Space>
              </div>
            </Sider>
            <Content style={{ padding: "17px 100px 24px 80px" }}>
              <div className="site-layout-content">
                {/* <Divider orientation="left"></Divider> */}
                {/* <Row justify="end">
                  <Space direction="horizontal">
                    <Button
                      icon={<PlusOutlined />}
                      type="primary"
                      onClick={openUserModal}
                    >
                      Thêm tài khoản
                    </Button>
                  </Space>
                </Row> */}
                <UserTable
                  dataSource={dataSourceFaculty}
                  setCurrentId={setCurrentId}
                  check={check.TinhTrang}
                />
                <UserModal currentId={currentId} setCurrentId={setCurrentId} />
              </div>
            </Content>
          </Layout>
        </Layout>
      );
  } else
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
              title="Tài khoản"
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
                  title="Loại tài khoản"
                  bordered={false}
                  style={{ width: 250 }}
                >
                  <Radio.Group defaultValue={1}>
                    <Space direction="vertical">
                      <Radio value={1} onClick={() => setDataSource(User)}>
                        Tất cả
                      </Radio>
                      <Radio
                        value={2}
                        onClick={() =>
                          setDataSource(
                            User.filter((user) => user.role === "Khoa")
                          )
                        }
                      >
                        Khoa
                      </Radio>
                      <Radio
                        value={3}
                        onClick={() =>
                          setDataSource(
                            User.filter((user) => user.role === "Giang Vien")
                          )
                        }
                      >
                        Giảng viên
                      </Radio>
                      <Row justify="end">
                        <Space direction="vertical">
                          <Button
                            style={{ margin: "10px 0px 0px 0px", width: "120%" }}
                            icon={<PlusOutlined />}
                            type="primary"
                            onClick={openUserModal}
                          >
                            Thêm tài khoản
                          </Button>
                          <Button
                              style={{
                                margin: "0px 0px 0px 0px",
                                width: "120%",
                              }}
                              icon={<EyeOutlined  />}
                              type="primary"
                              onClick={() => {
                                check.TinhTrang === "Tắt"
                                  ? setCheck({ ...check, TinhTrang: "Bật" })
                                  : setCheck({ ...check, TinhTrang: "Tắt" });
                              }}
                            >
                              Hiển thị mật khẩu
                            </Button>
                        </Space>
                      </Row>
                    </Space>
                  </Radio.Group>
                </Card>
              </Space>
            </div>
          </Sider>
          <Content style={{ padding: "17px 100px 24px 80px" }}>
            <div className="site-layout-content">
              <UserTable dataSource={dataSource} setCurrentId={setCurrentId}  check={check.TinhTrang} />
              <UserModal currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
}
