import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, PageHeader } from "antd";
import "./style.css";
import moment from "moment";
import Headerbar from "../../components/Header/HeaderBar/HeaderBar";
import {
  LoginsState$,
  ProjectState$,
  ReportsState$,
} from "../../redux/selectors";
import { Button, Popconfirm, message } from "antd";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";
const { Content, Header } = Layout;

export default function InfoReportPage() {
  const url = window.location.pathname;
  const path = url.split("/").filter((x) => x);
  const users = useSelector(LoginsState$);
  const projects = useSelector(ProjectState$);
  const reports = useSelector(ReportsState$);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(actions.getReports.getReportsRequest());
  }, [dispatch]);

  const report = reports.find(function (project) {
    return project._id === path[1];
  });

  const [data, setData] = React.useState(report);

  const [dataProject, setDataProject] = React.useState({
    _id: "",
    Diem: 0,
    XepLoai: "",
    attachment: "",
    TinhTrang: "Đã nghiệm thu",
  });

  const [dataCouncil, setDataCouncil] = React.useState({
    _id: "",
    status: "Đã nghiệm thu",
  });

  React.useEffect(() => {
    dataProject._id = report.idCouncil.idDeTai._id.toString();
    dataProject.Diem = Number(report.Diem);
    if (dataProject.Diem >= 95) {
      dataProject.XepLoai = "Xuất sắc";
    } else {
      if (dataProject.Diem >= 85) {
        dataProject.XepLoai = "Giỏi";
      } else {
        if (dataProject.Diem >= 75) {
          dataProject.XepLoai = "Khá";
        } else {
          if (dataProject.Diem >= 65) {
            dataProject.XepLoai = "Trung bình";
          } else {
            dataProject.XepLoai = "Không đạt";
          }
        }
      }
    }
  }, [dataProject]);

  function confirmDuyet(e) {
    data.status = "Thông qua";
    dataCouncil._id = report.idCouncil._id.toString();
    dataProject.attachment = report.attachment.toString();

    dispatch(actions.updateReports.updateReportsRequest(data));
    dispatch(actions.updateProjects.updateProjectsRequest(dataProject));
    dispatch(actions.updateCouncils.updateCouncilsRequest(dataCouncil));
    message.success("Báo cáo đã thông qua");
    setDataProject({
      _id: "",
      Diem: 0,
      XepLoai: "",
      attachment: "",
      TinhTrang: "Đã nghiệm thu",
    });
    setDataCouncil({
      _id: "",
      status: "Đã nghiệm thu",
    });
  }

  function cancel(e) {
    message.error("Mời bạn xác nhận lại");
  }

  const body = (
    <>
      <Popconfirm
        title="Bạn muốn duyệt báo cáo này?"
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
    <Layout className="layout">
      <Header>
        <Headerbar />
      </Header>
      <Layout>
        <Content>
          <PageHeader
            onBack={() => window.history.back()}
            className="site-page-header"
            title="Thông tin đề tài"
          />
        </Content>
      </Layout>
      <Content>
        <div className="InfoProject">
          <div className="TenDeTai">{data.Title}</div>
          <div className="LinhVuc">
            Ngày nghiệm thu:{" "}
            {moment(data.idCouncil.NgayNghiemThu).format("HH:MM DD/MM/YYYY")}
          </div>
          <div className="LinhVuc">
            {" "}
            Người gửi: Thư ký {data.idCouncil.idThuKy.name} - MSGV:{" "}
            {data.idCouncil.idThuKy.username}
          </div>

          <div className="timeandstatus">
            <d className="time">
              {moment(data.updatedAt).format("HH:MM DD/MM/YYYY")} -{" "}
            </d>
            <d className="status">{data.status}</d>
          </div>
          <a
            className="detai"
            onClick={() => {
              history.push("/Project_GV/" + data.idCouncil.idDeTai._id);
            }}
          >
            Đề tài: {data.idCouncil.idDeTai.TenDeTai}
          </a>
          <h3 className="h3">Nội dung:</h3>
          <div className="Mota">{data.Content}</div>

          <h3 className="h3">Điểm: {data.Diem}</h3>
          <div>
            <br />
            <h3 className="h3">Báo cáo nghiệm thu đề tài:</h3>
            <a
              className="h3"
              onClick={() => {
                window.open(data.attachment, "_blank");
              }}
            >
              #Báo cáo nghiệm thu
            </a>
          </div>
          {users.role === "Khoa" && data.status === "Chờ duyệt" ? (
            <div>{body}</div>
          ) : users.role === "Admin" && data.status === "Chờ duyệt" ? (
            <div>{body}</div>
          ) : (
            <br />
          )}
        </div>
      </Content>
    </Layout>
  );
}
