/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InfoState$, InfoModalState$ } from "../../redux/selectors"
import* as actions from "../../redux/actions"
import {
  Form,
  Input,
  Select,
  DatePicker,
  Modal
} from 'antd';
// import "./style.css"

import { messageError } from "../message";
import { hideInfoModal, updateInfo, createInfo} from "../../redux/actions";

export default function InfoModal ({currentId, setCurrentId}) {

    const dispatch = useDispatch();
    const {isShow} = useSelector(InfoModalState$);


    const Info = useSelector(InfoState$);

    const [data, setData] = useState({
        idLecturer: "",
        name: "",
        dateOfBirth: new Date(),
        faculty: "",
        email: "",
        contract: "",
        phoneNumber: "",
        level: "",
        facultyId: "",
    });

    const InfoValue = Info.find((Info) => 
    Info._id === currentId ? Info :null );

    useEffect(() => {
        if(InfoValue) setData(InfoValue);
    }, [InfoValue]);

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
        const isExistIdLectuter = Info.find((Info) => 
        Info.idLecturer === data.idLecturer && data.idLecturer !== InfoValue.idLecturer
        ? true
        : false
    );
    if (isExistIdLectuter){
        messageError("Đã tồn tại mã giảng viên");
        return false;
    }
    if(!data.name){
      messageError("Chưa nhập tên");
      return false;
    }
    if(!data.dateOfBirth){
      messageError("Chưa chọn ngày sinh");
      return false;
    }
    if(!data.email){
      messageError("Chưa nhập email");
      return false;
    }
    if(!data.phoneNumber){
        messageError("Chưa nhập số diem thoại");
        return false;
    }
    return true;
    };

    const onClose = useCallback(() => {
        dispatch(hideInfoModal());
        // setCurrentId(null);
        setData({
            idLecturer: "",
            name: "",
            dateOfBirth: new Date(),
            faculty: "",
            email: "",
            contract: "",
            phoneNumber: "",
            level: "",
            facultyId: "",
        });
    }, [dispatch]);

    const onSubmit = useCallback(() => {
        if(checkData()) {
            dispatch(updateInfo.updateInfoRequest(data));
        }
        else{
            dispatch(createInfo.createInfoRequest(data));
        }
        onClose();
    },[ data, dispatch, onClose, checkData]);

    const body= (
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
                            onChange={(e) =>
                                setData({...data, name: e.target.value})
                            }
                        />
                    </Form.Item>
                    <Form.Item label="Ngày sinh" required>
                        <DatePicker 
                            value = {data.dateOfBirth} 
                            placeholder ="Chọn ngày sinh" 
                            onChange={(e) => {
                                if (e)  setData({...data, dateOfBirth: e});
                            }}
                            />
                    </Form.Item>
                    <Form.Item label="Số điện thoại">
                        <Input 
                            value={data.phoneNumber}
                            placeholder="Nhập số điện thoại"
                            onChange={(e) => 
                                setData({...data, phoneNumber: e.target.value})
                        }/>
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input value={data.email}
                        placeholder="Nhập email"
                        onChange={(e) => 
                            setData({...data, email: e.target.value})
                    } />
                    </Form.Item>
                    <Form.Item label="Trình độ">
                        <Select >
                        <Select.Option value={data.level}
                        onChange={(e) => 
                            setData({...data, level: e.target.value})
                    }>Cử nhân</Select.Option>
                        <Select.Option value={data.level}
                        onChange={(e) => 
                            setData({...data, level: e.target.value})
                    }>Thạc sĩ</Select.Option>
                        <Select.Option value={data.level}
                        onChange={(e) => 
                            setData({...data, level: e.target.value})
                    }>Tiến Sĩ</Select.Option>
                        <Select.Option value={data.level}
                        onChange={(e) => 
                            setData({...data, level: e.target.value})
                    }>Giáo sư</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Ngành">
                        <Select value={data.faculty}>
                        <Select.Option value={data.faculty}
                        onChange={(e) => 
                            setData({...data, faculty: e.target.value})
                    }>Công nghệ Phần mềm</Select.Option>
                        <Select.Option value={data.faculty}
                        onChange={(e) => 
                            setData({...data, faculty: e.target.value})
                    }>Công nghệ Thông tin</Select.Option>
                        <Select.Option value={data.faculty}
                        onChange={(e) => 
                            setData({...data, faculty: e.target.value})
                    }>Kỹ thuật Máy tính</Select.Option>
                        <Select.Option value={data.faculty}
                        onChange={(e) => 
                            setData({...data, faculty: e.target.value})
                    }>An toàn Thông tin</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label = "Mã khoa"> 
                        {/* <Select >
                        <Select.Option value={data.facultyId} 
                        onChange={(e) => 
                            setData({...data, facultyId: e.target.value})
                    }>Mã Ngành</Select.Option>
                        </Select> */}
                         <Input 
                            value={data.facultyId}
                            placeholder="Nhập mã khoa"
                            onChange={(e) => 
                                setData({...data, facultyId: e.target.value})
                        }/>
                    </Form.Item>
                    <Form.Item label="Hợp đồng">
                        <Select >
                        <Select.Option value={data.contract}
                        onChange={(e) => 
                            setData({...data, contract: e.target.value})
                    }>Biên chế</Select.Option>
                        <Select.Option value={data.contract}
                        onChange={(e) => 
                            setData({...data, contract: e.target.value})
                    }>Hợp đồng</Select.Option>
                        <Select.Option value={data.contract}
                        onChange={(e) => 
                            setData({...data, contract: e.target.value})
                    }>Thính giảng</Select.Option>
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
        // open = {isShow}
      >
        {/* {body} */}
        <div>
            ABC
        </div>
      </Modal>
        </div>
  );
};