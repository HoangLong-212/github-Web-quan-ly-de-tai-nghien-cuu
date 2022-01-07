import React, { useState } from "react";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import {
    CancelsState$,
  ExtendsState$,
  LoginsState$,
  PostState$,
} from "../../../redux/selectors";
import moment from "moment";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function CancelList() {
  const dispatch = useDispatch();

  const Cancel = useSelector(CancelsState$);
  console.log("[Cancel]", Cancel);

  // let new_posts = Cancel.slice().reverse();
  let new_posts;
  const users = useSelector(LoginsState$);

  React.useEffect(() => {
    dispatch(actions.getCancels.getCancelsRequest());
  }, [dispatch]);
  const history = useHistory();

  if (users.role === "Khoa") {
    const data = Cancel.filter(
      (value) => (value.idDeTai.Capdo === "Khoa" && value.idDeTai.idTeam.idChuNhiem.facultyId.username === users.username)
    );
    new_posts = data.slice().reverse();
  } else {
    const data = Cancel.filter(
      (value) =>
      value.idDeTai.Capdo === "Trường"
    );
    new_posts = data.slice().reverse();
  }

  return (
    <div className="Form">
      <List
        size="large"
        bordered
        dataSource={new_posts}
        renderItem={(item) => (
          <List.Item
            actions={
              item.status === "Chờ duyệt"
                ? [
                    <p className="Status" style={{ color: "#52c41a" }}>
                      {item.status}
                    </p>,
                  ]
                : [
                    <div className="Status" style={{ color: "#1890ff" }}>
                      {item.status}
                    </div>,
                  ]
            }
          >
            <List.Item.Meta
              key={item._id}
              title={
                <div>
                  <div className="div_Title">
                    <a
                      className="Title"
                      onClick={()=> {history.push("/CancelPage/"+ item._id)}}
                    >
                      {item.title}
                    </a>
                  </div>
                  <div>
                    Người gửi: {item.idDeTai.idTeam.idChuNhiem.name} - MSGV:{" "}
                    {item.idDeTai.idTeam.idChuNhiem.username}{" "}
                  </div>
                  <div>Đề tài: {item.idDeTai.TenDeTai}</div>
                 
                  <div className="TimeAndAuthor">
                    {moment(item.updatedAt).format("HH:MM MMM DD, YYYY")}
                  </div>
                </div>
              }
              description={<div className="Content">{item.content}</div>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
