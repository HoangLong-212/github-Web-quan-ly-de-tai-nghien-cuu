/* eslint-disable react-hooks/exhaustive-deps */
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

export default function InfoModal() {
  const dispatch = useDispatch();

  const { isShow } = useSelector(InfoModalState$);

  const user = useSelector(LoginsState$);

  const Info = useSelector(InfoState$);

  const InfoValue = Info.find((Info) => Info.username === user.username);

  const [data, setData] = useState(
    //     {
    //     username: "",
    //     name: "",
    //     dateOfBirth: new Date(),
    //     faculty: "",
    //     email: "",
    //     contract: "",
    //     phoneNumber: "",
    //     level: "",
    //     facultyId: "",
    // }
    InfoValue
  );

  // useEffect(() => {
  //     if(InfoValue) setData(InfoValue);
  // }, [InfoValue]);

  const [form] = Form.useForm();

  // const checkData = () => {
  //     const isExistIdLectuter = Info.find((Info) =>
  //     Info.idLecturer === data.idLecturer && data.idLecturer != InfoValue.idLecturer
  //     ? true
  //     : false
  // );
  // if (isExistIdLectuter){
  //     messageError("Đã tồn tại mã giảng viên");
  //     return false;
  // }
  // if(!data.name){
  //   messageError("Chưa nhập tên");
  //   return false;
  // }
  // if(!data.dateOfBirth){
  //   messageError("Chưa chọn ngày sinh");
  //   return false;
  // }
  // if(!data.email){
  //   messageError("Chưa nhập email");
  //   return false;
  // }
  // if(!data.phoneNumber){
  //     messageError("Chưa nhập số điện thoại");
  //     return false;
  // }
  // return true;
  // };

  const checkData = () => {
    if (!data.name) {
      messageError("Chưa nhập tên");
      return false;
    }
    // if(!data.dateOfBirth){
    //   messageError("Chưa chọn ngày sinh");
    //   return false;
    // }
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
    // setCurrentId(null);
    setData(
      data
      // username: "",
      // name: "",
      // dateOfBirth: new Date(),
      // faculty: "",
      // email: "",
      // contract: "",
      // phoneNumber: "",
      // level: "",
      // facultyId: "",
    );
  }, [dispatch, data]);

  const onSubmit = useCallback(() => {
    dispatch(updateInfo.updateInfoRequest(data));

    onClose();
  }, [dispatch, data]);

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
            defaultValue={moment(data.dateOfBirth).format("DD/MM/YYYY")}
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
          <Input
            value={data.level}
            onChange={(e) => setData({ ...data, level: e.target.value })}
          ></Input>
        </Form.Item>
        <Form.Item label="Khoa">
          {/* <Input
            value={data.facultyId}
            placeholder="Nhập mã khoa"
            onChange={(e) => setData({ ...data, facultyId: e.target.value })}
          /> */}
        </Form.Item>
        <Form.Item label="Hợp đồng">
          <Input
            value={data.contract}
            onChange={(e) => setData({ ...data, contract: e.target.value })}
          ></Input>
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
