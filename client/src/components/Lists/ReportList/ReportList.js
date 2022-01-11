import React, { useState } from "react";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import {
  LoginsState$,
  ProjectState$,
  ReportsState$,
} from "../../../redux/selectors";
import moment from "moment";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function ReportList({ setCurrentId }) {
  const dispatch = useDispatch();
  const project = useSelector(ProjectState$);
  const users = useSelector(LoginsState$);
  const report = useSelector(ReportsState$);

  const history = useHistory();

  React.useEffect(() => {
    dispatch(actions.getReports.getReportsRequest());
  }, [dispatch]);

  let new_projects;
  let new_posts;
  if (users.role === "Admin") {
    const data = report.filter(
      (value) =>
        value.idCouncil.idDeTai.Capdo === "Trường" 
    );
    new_projects = data.slice().reverse();
  } else {
    if (users.role === "Khoa") {
      const data = report.filter(
        (value) =>
        value.idCouncil.idDeTai.Capdo === "Khoa"  &&
          value.idCouncil.idDeTai.idTeam.idChuNhiem.facultyId.username ===
          users.username
      );
      new_projects = data.slice().reverse();
    } else {
      const data = report.filter(
        (value) =>
         value.idCouncil.idThuKy.username === users.username
      );
      new_projects = data.slice().reverse();
    }
  }

  if (setCurrentId === "Tất cả") {
    new_posts = new_projects
  } else if (setCurrentId === "Chờ duyệt") {
    const data = new_projects.filter(
      (value) => value.status === "Chờ duyệt"
    );
    new_posts = data;
  } else {
    const data = new_projects.filter(
      (value) => value.status !== "Chờ duyệt"
    );
    new_posts = data;
  }

  return (
    <div className="List_Project">
      <List
        size="large"
        bordered
        dataSource={new_posts}
        renderItem={(item) => (
          <List.Item
          actions={
            item.status === "Chờ duyệt"
              ? [
                  <p className="Status" style={{ color: "#000000" }}>
                    {item.status}
                  </p>,
                ]
              : [
                  <div className="Status" style={{ color: "#52c41a" }}>
                    {item.status}
                  </div>,
                ]
          }>
            
            <List.Item.Meta
              key={item._id}
              title={
                <div>
                  <div className="div_Title">
                    <a
                      className="Title"
                      onClick={() => {
                        history.push("/ReportPage/" + item._id);
                      }}
                    >
                      {item.Title}
                    </a>
                  </div>
                  <div>
                    Ngày nghiệm thu:{" "}
                    {moment(item.idCouncil.NgayNghiemThu).format(
                      "HH:MM DD/MM/YYYY"
                    )}{" "}
                  </div>
                  <div className="ChuNhiem">
                    Người gửi: Thư ký {item.idCouncil.idThuKy.name} - MSGV:{" "}
                    {item.idCouncil.idThuKy.username}
                  </div>
                  <div>Điểm: {item.Diem}</div>

                  <d className="TimeAndAuthor">
                    {moment(item.updatedAt).format("HH:MM DD/MM/YYYY")}
                  </d>
                </div>
              }
              description={<div className="Content">{item.Content}</div>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
