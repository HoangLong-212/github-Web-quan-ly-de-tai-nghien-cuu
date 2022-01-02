import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.css";
import { login } from "../../redux/actions";
import { LoginsState$ } from "../../redux/selectors/index";
import { useHistory } from "react-router-dom";

export default function Login() {

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const history = useHistory();

  const users = useSelector(LoginsState$);



  const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  const onFinish = React.useCallback(() => {
    dispatch(login.loginRequest(data));
   
  }, [data, dispatch]);


  React.useEffect(() => {
    try {
      console.log("users",users);
      if(!isLoggedIn){
        if (users) {
          localStorage.setItem("access_token", users.username)
          if(users.role==="Giang Vien"){
            // history.push("/Home_GiangVien");
            history.push("/Home_GiangVien");
          }
          else
          {
            if(users.role==="Admin"){
              history.push("/Home_Admin");
            }
            else
            {
              history.push("/Home_Khoa");
            }         
          }
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="login">
      <h1 className="text">ĐĂNG NHẬP</h1>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
