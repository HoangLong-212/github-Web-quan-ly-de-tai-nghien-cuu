import React, { useState } from "react";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import { LoginsState$, ProjectState$ } from "../../../redux/selectors";
import moment from "moment";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function ProjectList() {
  const dispatch = useDispatch();
  const project = useSelector(ProjectState$);

  console.log("[cc]", project);

  const users = useSelector(LoginsState$);

  React.useEffect(() => {
    dispatch(actions.getProjects.getProjectsRequest());
  }, [dispatch]);
  const history = useHistory();
  let new_projects;

  if (users.role === "Khoa") {
    const data = project.filter(
      (value) => value.idTeam.idChuNhiem.facultyId.username === users.username
    );
    new_projects = data.slice().reverse();
  } else if (users.role === "Giang Vien") {
    const data = project.filter(
      (value) =>
        value.idTeam.idChuNhiem.username === users.username ||
        value.idTeam.ThanhVien.find((a) => a.username === users.username)
    );
    new_projects = data.slice().reverse();
  } else {
    const data = project.filter(
      (value) =>
        value.TinhTrang === "Chờ Trường duyệt" ||
        (value.Capdo === "Trường" && value.TinhTrang !== "Chờ Khoa duyệt")
    );
    new_projects = data.slice().reverse();
  }

  return (
    <div className="List_Project">
      <List
        size="large"
        bordered
        dataSource={new_projects}
        renderItem={(item) => (
          <List.Item
            actions={
              item.TinhTrang === "Đã hủy"
                ? [
                    <p className="Status" style={{ color: "#000000" }}>
                      {item.TinhTrang}
                    </p>,
                  ]
                : item.TinhTrang === "Đang tiến hành"
                ? [
                    <div className="Status" style={{ color: "#52c41a" }}>
                      {item.TinhTrang}
                    </div>,
                  ]
                : item.TinhTrang === "Không thông qua"
                ? [
                    <div className="Status" style={{ color: "#ff4d4f" }}>
                      {item.TinhTrang}
                    </div>,
                  ]
                : item.TinhTrang === "Đang tiến hành (Đã gia hạn)" ||
                  item.TinhTrang === "Đang tiến hành (Chờ nghiệm thu)"
                ? [
                    <div className="Status" style={{ color: "#52c41a" }}>
                      {item.TinhTrang}
                    </div>,
                  ]
                : item.TinhTrang === "Đã nghiệm thu"
                ? [
                    <div className="Status" style={{ color: "#1890ff" }}>
                      {item.TinhTrang}
                    </div>,
                  ]
                : [
                    <div className="Status" style={{ color: "#ffa940" }}>
                      {item.TinhTrang}
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
                        history.push("/Project_GV/" + item._id);
                      }}
                    >
                      {item.TenDeTai}
                    </a>
                  </div>
                  <div>Khoa: {item.idTeam.idChuNhiem.facultyId.name}</div>
                  <div className="ChuNhiem">
                    Chủ nhiệm: {item.idTeam.idChuNhiem.name}
                  </div>
                  <div>Lĩnh vực: {item.LinhVuc}</div>
                  <div>Cấp độ: {item.Capdo}</div>
                  <d className="TimeAndAuthor">
                    {moment(item.NgayBD).format("HH:MM MMM DD, YYYY")}
                  </d>
                </div>
              }
              description={<div className="Content">{item.Mota}</div>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
