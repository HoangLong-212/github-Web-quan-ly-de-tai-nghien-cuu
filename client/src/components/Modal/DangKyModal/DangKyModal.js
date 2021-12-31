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
} from "antd";
import { RetweetOutlined, SearchOutlined } from "@ant-design/icons";
import {
  InfoState$,
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
export default function DangKyModal() {
  const dispatch = useDispatch();
  const { isShow } = useSelector(ModalState$);
  const GiangVien = useSelector(InfoState$);
  const DeTai = useSelector(ProjectState$);

  const [data_DeTai, setData_DeTai] = React.useState({
    MaDeTai: "",
    TenDeTai: "",
    LinhVuc: "",
    Capdo: "Khoa",
    TinhTrang: "Chờ Khoa duyệt",
    Diem: 0,
    Mota: "",
    NgayBD: moment(),
    NgayKT: moment().add(1, "y"),
  });
  const [data_Nhom, setData_Nhom] = React.useState({
    MaTeam: "",
    TenTeam: "",
    idChuNhiem: "",
    ThanhVien: [],
  });

  const handleOk = React.useCallback(() => {
    if (
      data_DeTai.MaDeTai === "" ||
      data_DeTai.TenDeTai === "" ||
      data_DeTai.LinhVuc === "" ||
      data_DeTai.Mota === "" ||
      data_Nhom.MaTeam === "" ||
      data_Nhom.TenTeam === "" ||
      data_Nhom.idChuNhiem === ""
    ) {
      messageError("Vui lòng nhập đầy đủ thông tin");
    }
    else{
      dispatch(
        actions.createProjects.createProjectsRequest({
          dataNhom: data_Nhom,
          dataDeTai: data_DeTai,
        })
      );
      handleCancel();

    }
  }, [dispatch, data_DeTai, data_Nhom]);

  const handleCancel = React.useCallback(() => {
    dispatch(hideModal());
    setData_DeTai({
      MaDeTai: "",
      TenDeTai: "",
      LinhVuc: "",
      Capdo: "Khoa",
      TinhTrang: "Chờ Khoa duyệt",
      Diem: 0,
      Mota: "",
      NgayBD: moment(),
      NgayKT: moment().add(1, "y"),
    });
    setData_Nhom({ MaTeam: "", TenTeam: "", idChuNhiem: "", ThanhVien: [] });
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(actions.getInfo.getInfoRequest());
  }, [dispatch]);

  const [form] = Form.useForm();

  const validateMessages = {
    required: "${label} không được bỏ trống!",
    types: {
      number: "${label} không phải là số hợp lệ!",
    },
    number: {
      range: "${label} phải nằm trong khoảng từ ${min} đến ${max}",
    },
  };

  const RandomMaDeTai = React.useCallback(() => {
    if (data_DeTai.MaDeTai === "" || data_DeTai.MaDeTai === undefined) {
      let DeTais;
      do {
        const min = 1000000;
        const max = 9999999;
        const rand = min + Math.random() * (max - min);
        const DT = "DT" + Math.round(rand);
        setData_DeTai({ ...data_DeTai, MaDeTai: DT });
        DeTais = DeTai.find((data) => data.MaDeTai === DT);
      } while (DeTais !== undefined);
    }
  }, [dispatch, data_DeTai]);

  const RandomMaNhom = React.useCallback(() => {
    if (data_Nhom.MaTeam === "" || data_Nhom.MaTeam === undefined) {
      let Nhoms;
      do {
        const min = 1000000;
        const max = 9999999;
        const rand = min + Math.random() * (max - min);
        const NH = "NH" + Math.round(rand);
        setData_Nhom({ ...data_Nhom, MaTeam: NH });
        Nhoms = DeTai.find((data) => data.MaTeam === NH);
      } while (Nhoms !== undefined);
    }
  }, [dispatch, data_Nhom]);

  // const isNotRepeat = React.useCallback(
  //   () => {
  //     let newOptions =  GiangVien.map((data) => {
  //       var o = Object.assign({});
  //       o.value = data._id;
  //       o.label = `${data.name + " - " + data.username}`;
  //       return o;
  //     });
  //     const indexOfChuNhiem = options.indexOf(data_Nhom.idChuNhiem[0]);
  //     newOptions.splice(indexOfChuNhiem, )
  //     if (data.value === ) return false;
  //     if (data_Nhom.ThanhVien.length > 0) {
  //       data_Nhom.ThanhVien.forEach((element) => {
  //         if (element[0] === data.value) return false;
  //       });
  //     }
  //     return true;
  //   },
  //   [data_Nhom]
  // );

  // const [options, setOptions] = React.useState(
  //   GiangVien.map((data) => {
  //     var o = Object.assign({});
  //     o.value = data._id;
  //     o.label = `${data.name + " - " + data.username}`;
  //     return o;
  //   })
  // );
  const options = GiangVien.map((data) => {
    var o = Object.assign({});
    o.value = data._id;
    o.label = `${data.name + " - " + data.username}`;
    return o;
  });
  const onChangeThanhViens = (value, index) => {
    let newList = data_Nhom.ThanhVien;
    newList[index] = value;
    setData_Nhom({ ...data_Nhom, ThanhVien: newList });
  };
  const onDisplaySearch = (inputValue, path) => {
    return path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
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
        <h2>Thông tin đề tài:</h2>
        <Form.Item label="Mã đề tài" style={{ marginBottom: 0 }} required>
          <Row>
            <Form.Item
              style={{ display: "inline-block", width: "calc(30% - 12px)" }}
            >
              <Input.Group compact>
                <Input
                  allowClear
                  style={{ width: "calc(100% - 31px)" }}
                  placeholder="Nhập mã đề tài"
                  value={data_DeTai.MaDeTai}
                  onChange={(e) =>
                    setData_DeTai({ ...data_DeTai, MaDeTai: e.target.value })
                  }
                  defaultValue={data_DeTai.MaDeTai}
                />
                <Button icon={<RetweetOutlined />} onClick={RandomMaDeTai} />
              </Input.Group>
            </Form.Item>
            <Form.Item
              required
              style={{ width: "calc(50% - 12px)", marginLeft: 50 }}
              rules={[{ required: true, message: "Vui lòng nhập ngày" }]}
              label=" Ngày đăng ký"
              value={data_DeTai.NgayBD}
              onChange={(e) =>
                setData_DeTai({ ...data_DeTai, NgayBD: e.target.value })
              }
            >
              <DatePicker
                format={"DD/MM/YYYY"}
                value={data_DeTai.NgayBD}
                defaultValue={moment(data_DeTai.NgayBD)}
                onChange={(e) => {
                  if (e)
                    setData_DeTai({
                      ...data_DeTai,
                      NgayBD: e,
                      NgayKT: e.add(1, "y"),
                    });
                }}
              />
            </Form.Item>
          </Row>
        </Form.Item>

        <Form.Item
          // {...formItemLayout}
          //name="username"
          label="Tên đề tài"
          required
          rules={[
            {
              required: true,
              message: "Nhập tên đề tài",
            },
          ]}
        >
          <Input
            placeholder="Nhập tên đề tài"
            value={data_DeTai.TenDeTai}
            onChange={(e) =>
              setData_DeTai({ ...data_DeTai, TenDeTai: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Cấp độ" style={{ marginBottom: 0 }} required>
          <Row>
            <Form.Item
              style={{ display: "inline-block", width: "calc(30% - 12px)" }}
            >
              <Select
                placeholder="Chọn cấp độ"
                value={data_DeTai.Capdo}
                onChange={(e) => setData_DeTai({ ...data_DeTai, Capdo: e })}
              >
                <Option value="Khoa">Khoa</Option>
                <Option value="Trường">Trường</Option>
              </Select>
            </Form.Item>
            <Form.Item
              required
              style={{ width: "calc(50% - 12px)", marginLeft: 50 }}
              rules={[{ required: true, message: "Vui lòng chọn lĩnh vực" }]}
              label="Lĩnh vực"
            >
              <Select
                placeholder="Chọn lĩnh vực"
                value={data_DeTai.LinhVuc}
                onChange={(e) => setData_DeTai({ ...data_DeTai, LinhVuc: e })}
              >
                <Option value="Mạng máy tính">Mạng máy tính</Option>
                <Option value="Công nghệ Thông tin">Công nghệ Thông tin</Option>
                <Option value="Trí tuệ nhân tạo">Trí tuệ nhân tạo</Option>
                <Option value="An toàn thông tin">An toàn thông tin</Option>
              </Select>
            </Form.Item>
          </Row>
        </Form.Item>
        <Form.Item label="Mô tả đề tài" required>
          <TextArea
            allowClear
            rows={7}
            placeholder="Nhập mô tả"
            value={data_DeTai.Mota}
            defaultValue={data_DeTai.Mota}
            onChange={(e) =>
              setData_DeTai({ ...data_DeTai, Mota: e.target.value })
            }
          />
        </Form.Item>
        <h2>Thông tin nhóm thực hiện:</h2>
        <Form.Item label="Mã nhóm" style={{ marginBottom: 0 }} required>
          <Row>
            <Form.Item
              style={{ display: "inline-block", width: "calc(30% - 12px)" }}
            >
              <Input.Group compact>
                <Input
                  allowClear
                  style={{ width: "calc(100% - 31px)" }}
                  placeholder="Nhập mã nhóm"
                  value={data_Nhom.MaTeam}
                  onChange={(e) =>
                    setData_Nhom({ ...data_Nhom, MaTeam: e.target.value })
                  }
                  defaultValue={data_Nhom.MaTeam}
                />
                <Button icon={<RetweetOutlined />} onClick={RandomMaNhom} />
              </Input.Group>
              {/* <div
                value={data_Nhom.MaTeam}
                onChange={(e) => {
                  if (e) setData_Nhom({ ...data_Nhom, MaTeam: e });
                }}
              >
                DT001
              </div> */}
            </Form.Item>
            <Form.Item
              required
              style={{ width: "calc(50% - 12px)", marginLeft: 50 }}
              rules={[{ required: true, message: "Vui lòng nhập ngày" }]}
              label="Tên nhóm"
            >
              <Input
                placeholder="Nhập tên nhóm"
                value={data_Nhom.TenTeam}
                onChange={(e) =>
                  setData_Nhom({ ...data_Nhom, TenTeam: e.target.value })
                }
              />
            </Form.Item>
          </Row>
        </Form.Item>
        <Form.Item label="Chủ nhiệm đề tài" required>
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            onChange={(e) => setData_Nhom({ ...data_Nhom, idChuNhiem: e })}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Giảng viên 1">
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            onChange={(e) => onChangeThanhViens(e, 0)}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Giảng viên 2">
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            onChange={(e) => onChangeThanhViens(e, 1)}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Giảng viên 3">
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            onChange={(e) => onChangeThanhViens(e, 2)}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item label="Giảng viên 4">
          <Cascader
            options={options}
            placeholder="Nhập tên giảng viên"
            onChange={(e) => onChangeThanhViens(e, 3)}
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
        title={"Đăng ký đề tài mới"}
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
