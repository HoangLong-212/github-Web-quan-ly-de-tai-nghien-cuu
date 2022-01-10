import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  InfoState$,
  InfoModalState$,
  LoginsState$,
} from "../../redux/selectors";
import moment from "moment";
import { Form, Input, Select, DatePicker, Modal } from "antd";
// import "./style.css"

import { messageError } from "../message";
import { hideInfoModal, updateInfo } from "../../redux/actions";
import { Option } from "antd/lib/mentions";

export default function InfoModal() {
  const dispatch = useDispatch();

  const { isShow } = useSelector(InfoModalState$);

  const user = useSelector(LoginsState$);

  const Info = useSelector(InfoState$);

  const InfoValue = Info.find((Info) => Info.username === user.username);

  const [data, setData] = useState(InfoValue);

  useEffect(() => {
    if (InfoValue) setData(InfoValue);
  }, [InfoValue]);

  const [form] = Form.useForm();

  const checkData = () => {
    if (!data.name) {
      messageError("Chưa nhập tên");
      return false;
    }
    if (!data.email) {
      messageError("Chưa nhập email");
      return false;
    }
    if (!data.phoneNumber) {
      messageError("Chưa nhập số điện thoại");
      return false;
    }
    return true;
  };

  const onClose = useCallback(() => {
    dispatch(hideInfoModal());
    setData(InfoValue);
  }, [dispatch, data]);

  const onSubmit = useCallback(() => {
    dispatch(updateInfo.updateInfoRequest(data));
    onClose();
  }, [dispatch, data, onClose]);

  const body = (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item label="Họ và tên" required>
          <Input
            placeholder="Nhập họ và tên"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Ngày sinh">
          <DatePicker
            defaultValue={moment(data.dateOfBirth)}
            placeholder="Chọn ngày sinh"
            onChange={(e) => {
              if (e) setData({ ...data, dateOfBirth: e });
            }}
          />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input
            value={data.phoneNumber}
            placeholder="Nhập số điện thoại"
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            value={data.email}
            placeholder="Nhập email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Trình độ">
          <Select
            placeholder="Trình độ"
            value={data.level}
            onChange={(e) => setData({ ...data, level: e })}
          >
            <Option value="Cử nhân">Cử nhân</Option>
            <Option value="Thạc sĩ">Thạc sĩ</Option>
            <Option value="Tiến sĩ">Tiến sĩ</Option>
            <Option value="Giáo sư">Giáo sư</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Khoa">
          <div>{data.facultyId.name}</div>
        </Form.Item>
        <Form.Item label="Hợp đồng">
          <Select
            placeholder="Hợp đồng"
            value={data.contract}
            onChange={(e) => setData({ ...data, contract: e })}
          >
            <Option value="Hợp đồng">Hợp đồng</Option>
            <Option value="Biến chế">Biên chế</Option>
            <Option value="Thính giảng">Thính giảng</Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );

  return (
    <div>
      <Modal
        title="Chỉnh sửa thông tin"
        visible={isShow}
        onOk={onSubmit}
        onCancel={onClose}
        width={800}
        open={isShow}
      >
        {body}
      </Modal>
    </div>
  );
}
