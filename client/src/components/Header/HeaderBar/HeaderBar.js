import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import { Menu } from "antd";
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
import { useDispatch, useSelector } from "react-redux";
import {
  FacultyState$,
  InfoState$,
  LoginsState$,
} from "../../../redux/selectors";
import { Header } from "antd/lib/layout/layout";
import * as actions from "../../../redux/actions";
import { useState } from "react";

const { SubMenu } = Menu;

function Headerbar() {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(actions.getInfo.getInfoRequest());
      dispatch(actions.getUser.getUserRequest());
      dispatch(actions.getFaculty.getFacultyRequest());
  }, [dispatch]);

  const users = useSelector(LoginsState$);

  const info = useSelector(InfoState$);

  const faculty = useSelector(FacultyState$);

  const infoValue = info.find((Info) => {
    return Info.username === users.username;
  });

  console.log("infoj", info)
  console.log("facultyj", faculty)

  const facultyValue = faculty.find((faculty) => {
    return faculty.username === users.username;
  });

  console.log("mmmmm", facultyValue)

  const [data, setdata] = useState({
    name: "",
  });

  useEffect(() => {
    if (users.role === "Admin") {
      setdata({
        name: "Admin",
      });
    } else {
      if (users.role === "Khoa") {
        console.log("faculty header", facultyValue);
        setdata(facultyValue);
      } else {
        console.log("info header", infoValue);
        setdata(infoValue);
      }
    }
  }, [setdata, facultyValue, users.role, infoValue]);

  console.log("header", data);

  const history = useHistory();

  const handleHome = () => {
    history.push("/Home");
  };
  const handleProject = () => {
    history.push("/Project_GV");
  };

  const handleUser = React.useCallback(() => {
    history.push("/User_Page");
  });
  // const users = useSelector(LoginsState$);

  // const isAuthenticated = useSelector(LoginsState_isAuthenticated$);

  const TKclick = React.useCallback(() => {
    history.push("/Info_GiangVien");
  });

  const onClick = React.useCallback(() => {
    dispatch(actions.login.logoutRequest());

    localStorage.removeItem("access_token");
    history.push("/");
  });

  return (
    <div className="Header">
      <Header>
        <div className="logo">
          <img src={Logo} alt="Website Logo" onClick={handleHome}></img>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="Menu"
        >
          <SubMenu
            key="ThongBao"
            icon={<BellOutlined />}
            title="Thông báo"
            onTitleClick={handleHome}
          ></SubMenu>

          <SubMenu
            key="DeTai"
            icon={<DatabaseOutlined />}
            title="Đề tài"
            onTitleClick={handleProject}
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
            title="Tra Cứu"
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

          {/* Cmt lại để code không bug */}

          {users.role === "Giang Vien" ? null : (
            <SubMenu
              key="TaiKhoan"
              icon={<TeamOutlined />}
              title="Tài khoản"
              onTitleClick={handleUser}
            ></SubMenu>
          )}

          {/* <SubMenu
            key="TaiKhoan"
            icon={<TeamOutlined />}
            title="Tài khoản"
            onTitleClick={handleUser}
          ></SubMenu> */}

          {/* ></SubMenu> */}

          {/* <SubMenu
              key="Account"
              title="0585502434"
              icon={<UserOutlined />}
              className="account"
            >
              <Menu.Item key="subitem1">Tài khoản</Menu.Item>
              <Menu.Item key="subitem2">Đăng xuất</Menu.Item>
            </SubMenu> */}
        </Menu>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="account"
        >
          <SubMenu key="account" title={data.name} icon={<UserOutlined />}>
            {/* <Menu.Item key="subitem1" onClick={TKclick}>
              Tài khoản
            </Menu.Item> */}
            {users.role !== "Giang Vien" ? null :(
                          <Menu.Item key="subitem1" onClick={TKclick}>
                          Tài khoản
                        </Menu.Item>
            )}
            <Menu.Item key="subitem2" onClick={onClick}>
              Đăng xuất
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    </div>
  );
}

export default Headerbar;
