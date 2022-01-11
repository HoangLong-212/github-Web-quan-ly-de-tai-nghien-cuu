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
  ReportsState$,
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
import FileBase64 from "react-file-base64";

const { Option } = Select;
const { TextArea } = Input;

export default function ReportModal() {
  const dispatch = useDispatch();
  const { isShow } = useSelector(ModalState$);
  const GiangVien = useSelector(InfoState$);
  const users = useSelector(LoginsState$);
  const projects = useSelector(ProjectState$);
  const Countcil = useSelector(CouncilsState$);

  const countcils = Countcil.filter(
    (value) =>
      value.idThuKy.username === users.username &&
      value.status === "Chờ nghiệm thu"
  );

  const Report = useSelector(ReportsState$);

  const [data, setData] = React.useState({
    MaBaoCao: "",
    Title: "",
    Content: "",
    Diem: 0,
    status: "Chờ duyệt",
    attachment: "",
    idCouncil: "",
  });

  

  const handleOk = React.useCallback(() => {
    if (data.Diem > 100) {
      messageError("Vui lòng nhập lại điểm");
    } else {
      if (
        data.MaBaoCao === "" ||
        data.Title === "" ||
        data.Content === "" ||
        data.attachment === "" ||
        data.idCouncil === ""
      ) {
        messageError("Vui lòng nhập đầy đủ thông tin");
      } else {
        
        dispatch(actions.createReports.createReportsRequest(data));
       
        message.success("Báo cáo được tạo thành công");
        handleCancel();
      }
    }
  }, [dispatch, data]);

  const handleCancel = React.useCallback(() => {
    dispatch(hideModal());
    form.resetFields();
    setData({
      MaBaoCao: "",
      Title: "",
      Content: "",
      Diem: 0,
      attachment: "",
      idCouncil: "",
    });
    
  }, [dispatch]);

  const [form] = Form.useForm();

  const RandomMaBaoCao = React.useCallback(() => {
    if (data.MaBaoCao === "" || data.MaBaoCao === undefined) {
      let Reposts;
      do {
        const min = 1000000;
        const max = 9999999;
        const rand = min + Math.random() * (max - min);
        const BC = "BC" + Math.round(rand);
        setData({ ...data, MaBaoCao: BC });
        Reposts = Report.find((data) => data.MaBaoCao === BC);
      } while (Reposts !== undefined);
    }
  }, [dispatch, data]);

  const options = countcils.map((data) => {
    var o = Object.assign({});
    o.value = data._id;
    o.label = `${data.idDeTai.MaDeTai + " - " + data.idDeTai.TenDeTai}`;
    return o;
  });

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
        <Form.Item label="Mã báo cáo" style={{ marginBottom: 0 }} required>
          <Form.Item
       
          >
            <Input.Group compact>
              <Input
                allowClear
                style={{ width: "calc(100% - 31px)" }}
                placeholder="Nhập mã báo cáo"
                value={data.MaBaoCao}
                onChange={(e) => setData({ ...data, MaBaoCao: e.target.value })}
              />
              <Button icon={<RetweetOutlined />} onClick={RandomMaBaoCao} />
            </Input.Group>
          </Form.Item>
        </Form.Item>

        <Form.Item label="Đề tài" required>
          <Cascader
            options={options}
            placeholder="Mời chọn đề tài cần gia hạn"
            value={data.idCouncil}
            onChange={(e) => setData({ ...data, idCouncil: e })}
            allowClear
            suffixIcon={<SearchOutlined />}
            showSearch={onDisplaySearch}
          />
        </Form.Item>
        <Form.Item
          label="Tiêu đề"
          required
          rules={[
            {
              required: true,
              message: "Nhập tiêu đề",
            },
          ]}
        >
          <Input
            placeholder="Nhập tiêu đề"
            value={data.Title}
            onChange={(e) => setData({ ...data, Title: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Nội dung" required>
          <TextArea
            allowClear
            rows={10}
            placeholder="Nhập nội dung"
            value={data.Content}
            onChange={(e) => setData({ ...data, Content: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="Điểm"
          required
          rules={[
            {
              required: true,
              message: "Nhập điểm",
            },
          ]}
        >
          <Input
            style={{ width: "calc(15%" }}
            placeholder="Nhập điểm"
            value={data.Diem}
            onChange={(e) => {
              setData({ ...data, Diem: Number(e.target.value) });
              
            }}
          />
        </Form.Item>
        <Form.Item label="Đính kèm" required>
          <FileBase64
            multiple={false}
            type="file"
            value={data.attachment}
            onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
          ></FileBase64>
        </Form.Item>
      </Form>
    </>
  );
  return (
    <div>
      <Modal
        title={"Tạo báo cáo nghiệm thu"}
        visible={isShow}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} style={{margin:"0px 12px 0px 0px"}}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} style={{margin:"0px 7px 0px 0px"}}>
            Tạo
          </Button>,
        ]}
        width={800}
      >
        {body}
      </Modal>
    </div>
  );
}
