import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import "./style.css";
import moment from "moment";
import Headerbar from "../../../components/Header/HeaderBar/HeaderBar";
import { LoginsState$, ProjectState$ } from "../../../redux/selectors";
import { Button, Popconfirm, message } from "antd";
import * as actions from "../../../redux/actions";
const { Content, Header } = Layout;

export default function InfoProjectPage() {
  const url = window.location.pathname;
  const path = url.split("/").filter((x) => x);
  const users = useSelector(LoginsState$);
  const projects = useSelector(ProjectState$);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getProjects.getProjectsRequest());
  }, [dispatch]);

  const project = projects.find(function (project) {
    return project._id === path[1];
  });
  console.log("DDD", project);
  const [data, setData] = React.useState(project);

  function confirmDuyet(e) {
    if (users.role === "Admin") {
      message.success("Trường đã duyệt đề tài");
      data.TinhTrang = "Đang tiến hành";
      dispatch(actions.updateProjects.updateProjectsRequest(data));
    } else {
      if (project.Capdo === "Khoa") {
        message.success("Khoa đã duyệt đề tài");
        data.TinhTrang = "Đang tiến hành";
        dispatch(actions.updateProjects.updateProjectsRequest(data));
      } else {
        message.success("Đề tài đang chờ trường duyệt");
        data.TinhTrang = "Chờ Trường duyệt";
        dispatch(actions.updateProjects.updateProjectsRequest(data));
      }
    }
  }

  function cancel(e) {
    message.error("Mời bạn xác nhận lại");
  }

  function confirmHuy(e) {
    message.success("Bạn đã hủy đề tài");
    data.TinhTrang = "Không thông qua";
    dispatch(actions.updateProjects.updateProjectsRequest(data));
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
          <div className="TenDeTai">{data.TenDeTai}</div>
          <div className="LinhVuc">
            Khoa: {data.idTeam.idChuNhiem.facultyId.name}
          </div>
          <div className="LinhVuc">Lĩnh vực: {data.LinhVuc}</div>
          <div className="LinhVuc">Cấp độ: {data.Capdo}</div>
          <div className="timeandstatus">
            <d className="time">
              {moment(data.NgayBD).format("DD/MM/YYYY")} -{" "}
            </d>
            <d className="status">{data.TinhTrang}</d>
          </div>
          <h3 className="h3">Mô tả:</h3>
          <div className="Mota">{data.Mota}</div>

          <h3 className="h3">Nhóm thực hiện: {data.idTeam.TenTeam}</h3>
          <div className="h3">
            <div>
              {data.idTeam.idChuNhiem.name} - {data.idTeam.idChuNhiem.username}{" "}
              - Chủ nhiệm
            </div>
            {data.idTeam.ThanhVien[0] === undefined ? null : (
              <div>
                {data.idTeam.ThanhVien[0].name} -{" "}
                {data.idTeam.ThanhVien[0].username} - Thành viên
              </div>
            )}
            {data.idTeam.ThanhVien[1] === undefined ? null : (
              <div>
                {data.idTeam.ThanhVien[1].name} -{" "}
                {data.idTeam.ThanhVien[1].username} - Thành viên
              </div>
            )}
            {data.idTeam.ThanhVien[2] === undefined ? null : (
              <div>
                {data.idTeam.ThanhVien[2].name} -{" "}
                {data.idTeam.ThanhVien[2].username} - Thành viên
              </div>
            )}
            {data.idTeam.ThanhVien[3] === undefined ? null : (
              <div>
                {data.idTeam.ThanhVien[3].name} -{" "}
                {data.idTeam.ThanhVien[3].username} - Thành viên
              </div>
            )}
            {data.idTeam.ThanhVien[4] === undefined ? null : (
              <div>
                {data.idTeam.ThanhVien[4].name} -{" "}
                {data.idTeam.ThanhVien[4].username} - Thành viên
              </div>
            )}
            <h3 className="h4">Kết quả nghiệm thu:</h3>
            <d>Điểm: </d>
            {data.Diem === 0 ? null : <d>{data.Diem}</d>}
            <h3 className="NgayKT">
              Ngày kết thúc: {moment(data.NgayKT).format("DD/MM/YYYY")}
            </h3>
          </div>
          {users.role === "Khoa" && data.TinhTrang === "Chờ Khoa duyệt" ? (
            <div>{body}</div>
          ) : users.role === "Admin" &&
            data.TinhTrang === "Chờ Trường duyệt" ? (
            <div>{body}</div>
          ) : (
            <br />
          )}
        </div>
      </Content>
    </Layout>
  );
}
