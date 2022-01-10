import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.css";
import { login } from "../../redux/actions";
import { LoginsState$ } from "../../redux/selectors/index";
import { useHistory } from "react-router-dom";
import * as actions from "../../redux/actions"
export default function Login() {

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const history = useHistory();

  const users = useSelector(LoginsState$);
  useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
    dispatch(actions.getUser.getUserRequest());
    dispatch(actions.getFaculty.getFacultyRequest());
  }, [dispatch]);



  const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  const onFinish = React.useCallback(() => {
    dispatch(login.loginRequest(data));
   
  }, [data, dispatch]);


  React.useEffect(() => {
    try {
      if(!isLoggedIn){
        if (users) {
          localStorage.setItem("access_token", users.username)
          history.push("/Home");
          
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
              message: "Mời nhập username",
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
              message: "Mời nhập password",
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
