import React from "react";
import {
  Modal,
  Form,
  Select,
  Button,
  Input,
  AutoComplete,
  Row,
  DatePicker,
  Cascader,
  message,
  TimePicker,
} from "antd";
import { RetweetOutlined, SearchOutlined } from "@ant-design/icons";
import {
  CouncilsState$,
  InfoState$,
  LoginsState$,
  ModalState$,
  ProjectState$,
} from "../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../../redux/actions";
import * as actions from "../../../redux/actions";
import moment from "moment";
import {
  messageError,
  messageLoadingSuccess,
  messageSuccess,
} from "../../message";

const { Option } = Select;
const { TextArea } = Input;

export default function CouncilModal() {
  const dispatch = useDispatch();
  const { isShow } = useSelector(ModalState$);
  const GiangVien = useSelector(InfoState$);
  const users = useSelector(LoginsState$);
  const projects = useSelector(ProjectState$);
  const Countcil = useSelector(CouncilsState$);

  const [data, setData] = React.useState({
    MaHD: "",
    idChuTich: "",
    idThuKy: "",
    idPhanBien1: "",
    idPhanBien2: "",
    status: "Nghiệm thu",
    UyVien: [],
    NgayNghiemThu: moment(),
    idDeTai: "",
  });
  const [dataProject, setDataProject] = React.useState({
    _id: "",
    TinhTrang: "Đang tiến hành (Chờ nghiệm thu)",
  }); 
  
 
  

  const handleOk = React.useCallback(() => {
    const newday = moment();
    if (data.NgayNghiemThu <= newday) {
      messageError("Vui lòng chọn ngày nghiệm thu lớn hơn hôm nay");
    } else {
      if (
        data.MaHD === "" ||
        data.idChuTich === "" ||
        data.idThuKy === "" ||
        data.idPhanBien1 === "" ||
        data.idPhanBien2 === "" ||
        data.TenTeam === "" ||
        data.UyVien[0].length === 0 ||
        data.UyVien[1].length === 0 ||
        data.UyVien[2].length === 0
      ) {
        messageError("Vui lòng nhập đầy đủ thông tin");
      } else {
        dataProject._id= data.idDeTai.toString();
        dispatch(actions.createCouncils.createCouncilsRequest(data));
       dispatch(actions.updateProjects.updateProjectsRequest(dataProject));
        message.success("Hội đồng được tạo thành công");
        handleCancel();
      }
    }
  }, [dispatch, data]);

  const handleCancel = React.useCallback(() => {
    dispatch(hideModal());
    form.resetFields();
    setData({
      MaHD: "",
      idChuTich: "",
      idThuKy: "",
      idPhanBien1: "",
      idPhanBien2: "",
      status: "Nghiệm thu",
      UyVien: [],
      NgayNghiemThu: moment(),
      idDeTai: "",
    });
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
  }, [dispatch]);

  const [form] = Form.useForm();

  const RandomMaDeTai = React.useCallback(() => {
    if (data.MaHD === "" || data.MaHD === undefined) {
      let Countcils;
      do {
        const min = 1000000;
        const max = 9999999;
        const rand = min + Math.random() * (max - min);
        const HD = "HD" + Math.round(rand);
        setData({ ...data, MaHD: HD });
        Countcils = Countcil.find((data) => data.MaHD === HD);
      } while (Countcils !== undefined);
    }
  }, [dispatch, data]);

  let new_projects;
  if (users.role === "Khoa") {
    const data = projects.filter(
      (value) =>
        value.Capdo === "Khoa" &&
        value.idTeam.idChuNhiem.facultyId.username === users.username
    );
    new_projects = data.slice().reverse();
  } else {
    const data = projects.filter((value) => value.Capdo === "Trường");
    new_projects = data.slice().reverse();
  }

  const project = new_projects.filter(
    (value) =>
      value.TinhTrang === "Đang tiến hành" ||
      value.TinhTrang === "Đang tiến hành (Đã gia hạn)"
  );
  const check = projects.find((e) => e._id === data.idDeTai.toString());

  const options = GiangVien.map((data) => {
    if (check) {
      if (data._id === check.idTeam.idChuNhiem._id) return null;
      if (check.idTeam.ThanhVien.find((e) => e._id === data._id) !== undefined)
        return null;
    }
    var o = Object.assign({});
    o.value = data._id;
    o.label = `${data.name + " - " + data.username}`;
    return o;
  }).filter((data) => {
    return data != null;
  });

  const optionsDT = project.map((data) => {
    var o = Object.assign({});
    o.value = data._id;
    o.label = `${data.MaDeTai + " - " + data.TenDeTai}`;
    return o;
  });

  const onChangeThanhViens = (value, index) => {
    let newList = data.UyVien;
    newList[index] = value;
    setData({ ...data, UyVien: newList });
  };
  const onDisplaySearch = (inputValue, path) => {
    return path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };

  const validateMessages = {
    required: "${label} không được bỏ trống!",
    types: {
      number: "${label} không phải là số hợp lệ!",
    },
    number: {
      range: "${label} phải nằm trong khoảng từ ${min} đến ${max}",
    },
  };

  const body = (
    <>
      <Form
        validateMessages={validateMessages}
        form={form}
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 30,
        }}
        layout="horizontal"
      >
        <Form.Item label="Mã hội đồng" style={{ marginBottom: 0 }} required>
          <Form.Item
          //   style={{ display: "inline-block", width: "calc(30% - 12px)" }}
          >
            <Input.Group compact>
              <Input
                allowClear
                style={{ width: "calc(100% - 31px)" }}
                placeholder="Nhập mã hội đồng"
                value={data.MaHD}
                onChange={(e) => setData({ ...data, MaHD: e.target.value })}
              />
              <Button icon={<RetweetOutlined />} onClick={RandomMaDeTai} />
            </Input.Group>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Thời gian nghiệm thu"
          style={{ marginBottom: 0 }}
          required
        >
          <Row>
            <Form.Item
              style={{ display: "inline-block", width: "calc(30% - 12px)" }}
            >
              <TimePicker
                format={"HH : mm"}
                value={data.NgayNghiemThu}
                onChange={(e) => {
                  if (e)
                    setData({
                      ...data,
                      NgayNghiemThu: e,
                    });
                }}
              />
            </Form.Item>
            <Form.Item
              required
              style={{ width: "calc(50% - 12px)", marginLeft: 50 }}
              rules={[{ required: true, message: "Vui lòng nhập ngày" }]}
              label=" Ngày nghiệm thu"
              value={data.NgayNghiemThu}
              onChange={(e) =>
                setData({ ...data, NgayNghiemThu: e.target.value })
              }
            >
              <DatePicker
                format={"DD/MM/YYYY"}
                value={data.NgayNghiemThu}
                onChange={(e) => {
                  if (e)
                    setData({
                      ...data,
                      NgayNghiemThu: e,
                    });
                }}
              />
            </Form.Item>
          </Row>
        </Form.Item>
        {/* <Form.Item label="Mã hội đồng" style={{ marginBottom: 0 }} required>
          <Row>
            <Form.Item
              style={{ display: "inline-block", width: "calc(30% - 12px)" }}
            >
              <Input.Group compact>
                <Input
                  allowClear
                  style={{ width: "calc(100% - 31px)" }}
                  placeholder="Nhập mã hội đồng"
                  value={data.MaHD}
                  onChange={(e) => setData({ ...data, MaHD: e.target.value })}
                />
                <Button icon={<RetweetOutlined />} onClick={RandomMaDeTai} />
              </Input.Group>
            </Form.Item>
            <Form.Item
              required
              style={{ width: "calc(50% - 12px)", marginLeft: 50 }}
              rules={[{ required: true, message: "Vui lòng nhập ngày" }]}
              label=" Ngày nghiệm thu"
              value={data.NgayNghiemThu}
              onChange={(e) =>
                setData({ ...data, NgayNghiemThu: e.target.value })
              }
            >
              <DatePicker
                format={"DD/MM/YYYY"}
                value={data.NgayNghiemThu}
                onChange={(e) => {
                  if (e)
                    setData({
                      ...data,
                      NgayNghiemThu: e,
                    });
                }}
              />
            </Form.Item>
          </Row>
        </Form.Item> */}

        <Form.Item label="Đề tài" required>
          <Cascader
            options={optionsDT}
            placeholder="Mời chọn đề tài cần gia hạn"
            value={data.idDeTai}
            onChange={(e) => setData({ ...data, idDeTai: e })}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>

        <Form.Item label="Chủ tịch" required>
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            value={data.idChuTich}
            onChange={(e) => setData({ ...data, idChuTich: e })}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Thư ký" required>
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            value={data.idThuKy}
            onChange={(e) => setData({ ...data, idThuKy: e })}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Phản biện 1" required>
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            value={data.idPhanBien1}
            onChange={(e) => setData({ ...data, idPhanBien1: e })}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Phản biện 2" required>
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            value={data.idPhanBien2}
            onChange={(e) => setData({ ...data, idPhanBien2: e })}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Ủy viên 1" required>
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            value={data.UyVien[0]}
            onChange={(e) => onChangeThanhViens(e, 0)}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Ủy viên 2" required>
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            value={data.UyVien[1]}
            onChange={(e) => onChangeThanhViens(e, 1)}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Ủy viên 3" required>
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            value={data.UyVien[2]}
            onChange={(e) => onChangeThanhViens(e, 2)}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
      </Form>
    </>
  );
  return (
    <div>
      <Modal
        title={"Lập hội đồng nghiệm thu"}
        visible={isShow}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
        width={800}
      >
        {body}
      </Modal>
    </div>
  );
}
