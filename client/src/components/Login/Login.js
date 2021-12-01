import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.css";
import { login } from "../../redux/actions";
import { LoginsState$ } from "../../redux/selectors";

export default function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const users=useSelector(LoginsState$);
  //console.log(users);
  const onFinish = React.useCallback(() => {
    dispatch(login.loginRequest(data));
  }, [data, dispatch]);

  const { Content } = Layout;
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
