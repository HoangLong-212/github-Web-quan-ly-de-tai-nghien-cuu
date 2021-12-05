import React, { useState } from "react";
import { Button, Layout } from "antd";
import { useHistory } from "react-router";
import {
  LoginsState$,
  LoginsState_isAuthenticated$,
} from "../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/actions";

const { Content } = Layout;

export default function HomePage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const users = useSelector(LoginsState$);

  const isAuthenticated = useSelector(LoginsState_isAuthenticated$);

  const onClick = React.useCallback(() => {
    console.log("long", users);
    dispatch(login.logoutRequest());
    
    localStorage.removeItem("access_token");
    history.push("/");
  });

  return (
    <div>
      <h1>HomePage Admin</h1>;<Button onClick={onClick}>Đăng xuất</Button>
    </div>
  );
}
