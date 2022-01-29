import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, PageHeader } from "antd";
import "./style.css";
import moment from "moment";
import Headerbar from "../../components/Header/HeaderBar/HeaderBar";
import { Button, Popconfirm, message } from "antd";
import * as actions from "../../redux/actions";
import {
  ExtendsState$,
  LoginsState$,
  ProjectState$,
} from "../../redux/selectors";
import { useHistory } from "react-router-dom";

const { Content, Header } = Layout;
export default function ExtendPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const url = window.location.pathname;
  const path = url.split("/").filter((x) => x);
  const Extend = useSelector(ExtendsState$);
  const projects = useSelector(ProjectState$);

  React.useEffect(() => {
    dispatch(actions.getExtends.getExtendsRequest());
  }, [dispatch]);
  const extend = Extend.find(function (extend) {
    return extend._id === path[1];
  });

  const project = projects.find(function (project) {
    return project._id === extend.idDeTai._id;
  });

  const [data, setData] = React.useState(extend);
  const [dataProject, setDataProject] = React.useState(project);

  function confirmDuyet(e) {
    data.status = "Thông qua";
    dataProject.TinhTrang = "Đang tiến hành (Đã gia hạn)";
    dataProject.NgayKT = moment(dataProject.NgayKT).add(data.GiaHan, "M");
    dispatch(actions.updateExtends.updateExtendsRequest(data));
    dispatch(actions.updateProjects.updateProjectsRequest(dataProject));
    message.success("Đề tài đã được gia hạn");
  }

  function cancel(e) {
    message.error("Mời bạn xác nhận lại");
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
        <Button className="ButtonGiaHan" type="primary">
          Duyệt
        </Button>
      </Popconfirm>
    </>
  );
  return (
    <Layout className="layout" style={{ background: "#f0f2f5" }}>
      <Header>
        <Headerbar />
      </Header>
      <Layout>
        <Content style={{ padding: "0px 0px 0px 73px" }}>
          <PageHeader
            onBack={() => window.history.back()}
            className="site-page-header"
            title="Đơn gia hạn"
          />
        </Content>
      </Layout>
      <Content>
        <div className="InfoProject">
          <div className="TenDeTai">{data.title}</div>
          <div className="LinhVuc">
            {" "}
            Người gửi: {data.idDeTai.idTeam.idChuNhiem.name} - MSGV:{" "}
            {data.idDeTai.idTeam.idChuNhiem.username}{" "}
          </div>
          <div className="LinhVuc" style={{ color: "#ff4d4f" }}>
            Thời gian gia hạn: {data.GiaHan} tháng
          </div>
          <div className="TimeAndStatus">
            <d className="time">
              {moment(data.updatedAt).format(" DD/MM/YYYY")} -{" "}
            </d>
            <d className="status">{data.status}</d>
          </div>
          <a
            className="detai"
            onClick={() => {
              history.push("/Project_GV/" + data.idDeTai._id);
            }}
          >
            Đề tài: {data.idDeTai.TenDeTai}
          </a>
          <h3 className="lydo">Lý do gia hạn:</h3>
          <div className="Mota">{data.content}</div>

          {data.status === "Chờ duyệt" ? <div>{body}</div> : <br />}
        </div>
      </Content>
    </Layout>
  );
}
