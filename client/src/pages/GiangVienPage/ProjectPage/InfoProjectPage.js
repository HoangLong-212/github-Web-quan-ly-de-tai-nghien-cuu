import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import "./style.css";
import moment from "moment";
import Headerbar from "../../../components/Header/HeaderBar/HeaderBar";
import { ProjectState$ } from "../../../redux/selectors";
import { Button, Popconfirm, message } from "antd";

const { Content, Header } = Layout;

export default function InfoProjectPage() {
  const url = window.location.pathname;
  const path = url.split("/").filter((x) => x);

  const projects = useSelector(ProjectState$);

  const project = projects.find(function (project) {
    return project._id === path[1];
  });

  function confirmDuyet(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log("a",e);
    message.error("Click on No");
  }

  function confirmHuy(e) {
    console.log(e);
    message.success("Click on Yes");
  }


  const body = (
    <>
      <Popconfirm
        title="Bạn muốn duyệt đề tài này?"
        onConfirm={confirmDuyet}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button className="ButtonDuyet" type="primary">
          Duyệt
        </Button>
      </Popconfirm>
      
      <Popconfirm
        title="Bạn muốn hủy đề tài này?"
        onConfirm={confirmHuy}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger className="ButtonHuy">
          Không duyệt
        </Button>
      </Popconfirm>
      
     
    </>
  );

  return (
    <Layout className="layout">
      <Header>
        <Headerbar />
      </Header>
      <Content>
        <div className="InfoProject">
          <div className="TenDeTai">{project.TenDeTai}</div>
          <div className="LinhVuc">Lĩnh vực: {project.LinhVuc}</div>
          <div className="LinhVuc">Cấp độ: {project.Capdo}</div>
          <div className="timeandstatus">
            <d className="time">
              {moment(project.NgayBD).format(" MMM DD, YYYY")} -{" "}
            </d>
            <d className="status">{project.TinhTrang}</d>
          </div>
          <h3 className="h3">Mô tả:</h3>
          <div className="Mota">{project.Mota}</div>

          <h3 className="h3">Nhóm thực hiện: {project.idTeam.TenTeam}</h3>
          <div className="h3">
            <div>
              {project.idTeam.idChuNhiem.name} -{" "}
              {project.idTeam.idChuNhiem.username} - Chủ nhiệm
            </div>
            {project.idTeam.ThanhVien[0] === undefined ? null : (
              <div>
                {project.idTeam.ThanhVien[0].name} -{" "}
                {project.idTeam.ThanhVien[0].username} - Thành viên
              </div>
            )}
            {project.idTeam.ThanhVien[1] === undefined ? null : (
              <div>
                {project.idTeam.ThanhVien[1].name} -{" "}
                {project.idTeam.ThanhVien[1].username} - Thành viên
              </div>
            )}
            {project.idTeam.ThanhVien[2] === undefined ? null : (
              <div>
                {project.idTeam.ThanhVien[2].name} -{" "}
                {project.idTeam.ThanhVien[2].username} - Thành viên
              </div>
            )}
            {project.idTeam.ThanhVien[3] === undefined ? null : (
              <div>
                {project.idTeam.ThanhVien[3].name} -{" "}
                {project.idTeam.ThanhVien[3].username} - Thành viên
              </div>
            )}
            {project.idTeam.ThanhVien[4] === undefined ? null : (
              <div>
                {project.idTeam.ThanhVien[4].name} -{" "}
                {project.idTeam.ThanhVien[4].username} - Thành viên
              </div>
            )}
            <h3 className="h4">Kết quả nghiệm thu:</h3>
            <d>Điểm: </d>
            {project.Diem === 0 ? null : <d>{project.Diem}</d>}
            <h3 className="NgayKT">
              Ngày kết thúc: {moment(project.NgayKT).format("MMM DD, YYYY")}
            </h3>
          </div>
          {body}
        </div>
      </Content>
    </Layout>
  );
}
