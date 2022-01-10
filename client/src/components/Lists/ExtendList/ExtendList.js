import React, { useState } from "react";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import {
  ExtendsState$,
  LoginsState$,
  PostState$,
} from "../../../redux/selectors";
import moment from "moment";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function ExtendList() {
  const dispatch = useDispatch();

  const Extend = useSelector(ExtendsState$);

  let new_posts;
  const users = useSelector(LoginsState$);

  React.useEffect(() => {
    dispatch(actions.getExtends.getExtendsRequest());
  }, [dispatch]);
  const history = useHistory();

  if (users.role === "Khoa") {
    const data = Extend.filter(
      (value) =>
        value.idDeTai.Capdo === "Khoa" &&
        value.idDeTai.idTeam.idChuNhiem.facultyId.username === users.username
    );
    new_posts = data.slice().reverse();
  } else {
    const data = Extend.filter((value) => value.idDeTai.Capdo === "Trường");
    new_posts = data.slice().reverse();
  }

  return (
    <div className="Form" style={{ margin: "15px 30px 0px 0px" }}>
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
                      onClick={() => {
                        history.push("/ExtendPage/" + item._id);
                      }}
                    >
                      {item.title}
                    </a>
                  </div>
                  <div>
                    Người gửi: {item.idDeTai.idTeam.idChuNhiem.name} - MSGV:{" "}
                    {item.idDeTai.idTeam.idChuNhiem.username}{" "}
                  </div>
                  <div>Đề tài: {item.idDeTai.TenDeTai}</div>
                  <div>Thời gian gia hạn: {item.GiaHan} tháng</div>
                  <div className="TimeAndAuthor">
                    {moment(item.updatedAt).format("HH:MM DD/MM/YYYY")}
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
