import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import { Menu, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import {
  EyeOutlined,
  DatabaseOutlined,
  SwapOutlined,
  TeamOutlined,
  BellOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";
import { useSelector } from "react-redux";
import { LoginsState$ } from "../../../redux/selectors";

const { SubMenu } = Menu;

function Headerbar() {
  const users = useSelector(LoginsState$);

  const history = useHistory();

  const handleHome = () => {
    history.push("/Home_Admin");
  };
  return (
    <div>
      <Row>
        <Col span={2}>
          <div className="logo">
            <img src={Logo} alt="Website Logo" onClick={handleHome}></img>
          </div>
        </Col>
        <Col>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1000"]}>
            <SubMenu
              key="ThongBao"
              icon={<BellOutlined />}
              title="Thông báo"
              onTitleClick={{}}
            ></SubMenu>

            <SubMenu
              key="DeTai"
              icon={<DatabaseOutlined />}
              title="Đề tài"
              onTitleClick={{}}
            ></SubMenu>
            <SubMenu
              key="Don"
              icon={<SwapOutlined />}
              title="Đơn"
              onTitleClick={{}}
            >
              <Menu.Item key="GiaHanDeTai" onClick={{}}>
                Gia hạn đề tài
              </Menu.Item>
              <Menu.Item key="DungDeTai" onClick={{}}>
                Dừng đề tài
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="TraCuu"
              icon={<EyeOutlined />}
              title="TraCuu"
              onTitleClick={{}}
            ></SubMenu>
            <SubMenu
              key="NghiemThu"
              icon={<CalendarOutlined />}
              title="Nghiệm thu"
              onTitleClick={{}}
            >
              <Menu.Item key="HoiDongNghiemThu" onClick={{}}>
                Hội đồng nghiệm thu
              </Menu.Item>
              <Menu.Item key="BaoCaoNghiemThu" onClick={{}}>
                Báo cáo nghiệm thu
              </Menu.Item>
            </SubMenu>
            {users.role === "GiangVien" ? null : (
              <SubMenu
                key="TaiKhoan"
                icon={<TeamOutlined />}
                title="Tài khoản"
                onTitleClick={{}}
              ></SubMenu>
            )}
            <SubMenu
              key="Account"
              title="0585502434"
              icon={<UserOutlined />}
              className="account"             
            >
              <Menu.Item key="subitem1">Tài khoản</Menu.Item>
              <Menu.Item key="subitem2">Đăng xuất</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
    </div>
  );
}

export default Headerbar;


