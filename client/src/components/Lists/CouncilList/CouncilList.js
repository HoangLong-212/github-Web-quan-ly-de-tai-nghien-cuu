import React, { useState } from "react";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import {
  CouncilsState$,
  LoginsState$,
  ProjectState$,
} from "../../../redux/selectors";
import moment from "moment";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function CouncilList() {
  const dispatch = useDispatch();
  const project = useSelector(ProjectState$);
  const council = useSelector(CouncilsState$);

  console.log("[council]", council);
  let new_projects = council.slice().reverse();

  const users = useSelector(LoginsState$);

  React.useEffect(() => {
    dispatch(actions.getCouncils.getCouncilsRequest());
  }, [dispatch]);
  const history = useHistory();

    if (users.role === "Khoa") {
      const data = council.filter(
        (value) => value.idDeTai.idTeam.idChuNhiem.facultyId.username === users.username && value.idDeTai.Capdo === "Khoa"
      );
      new_projects = data.slice().reverse();
    } 
    else if (users.role === "Giang Vien") {
      const data = council.filter(
        (value) =>
          value.idDeTai.idTeam.idChuNhiem.username === users.username ||
          value.idDeTai.idTeam.ThanhVien.find((a) => a.username === users.username)|| 
          value.idChuTich.username === users.username ||
          value.UyVien.find((a) => a.username === users.username)||
          value.idPhanBien1.username === users.username ||
          value.idPhanBien2.username === users.username ||
          value.idThuKy.username === users.username 
      );
      new_projects = data.slice().reverse();
    } 
    else {
      const data = council.filter(
        (value) =>
          value.idDeTai.Capdo  === "Trường"
      );
      new_projects = data.slice().reverse();
    }

    console.log("new_projects",new_projects)
  return (
    <div className="List_Project">
      <List
        size="large"
        bordered
        dataSource={new_projects}
        renderItem={(item) => (
          <List.Item
            actions={
              item.TinhTrang === "Nghiệm thu"
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
                        history.push("/Project_GV/" + item.idDeTai._id);
                      }}
                    >
                      {item.idDeTai.TenDeTai}
                    </a>
                  </div>
                
                  <div className="ChuNhiem">
                   Ngày nghiệm thu: {moment(item.NgayNghiemThu).format("HH:mm, DD/MM/YYYY")}
                  </div>
                 
                  <d className="TimeAndAuthor">
                    {moment(item.updatedAt).format("HH:MM, DD/MM/YYYY")}
                  </d>
                </div>
              }
              description={
                <div>
                  <div className="HoiDong">Chủ tịch: {item.idChuTich.name}</div>
                  <div className="HoiDong">Thư ký: {item.idThuKy.name}</div>
                  <div className="HoiDong">Phản biện 1: {item.idPhanBien1.name}</div>
                  <div className="HoiDong">Phản biện 2: {item.idPhanBien2.name}</div>
                  <div className="HoiDong">Ủy viên 1: {item.UyVien[0].name}</div>
                  <div className="HoiDong">Ủy viên 2: {item.UyVien[1].name}</div>
                  <div className="HoiDong">Ủy viên 3: {item.UyVien[2].name}</div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}
