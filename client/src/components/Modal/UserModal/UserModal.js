import { SearchOutlined } from "@ant-design/icons";
import { Input, Modal, Form, Select, Cascader, Button } from "antd";
import Password from "antd/lib/input/Password";
import { Option } from "antd/lib/mentions";
import { getKeyThenIncreaseKey } from "antd/lib/message";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { $CombinedState } from "redux";
import {
  createFaculty,
  createInfo,
  createUser,
  getInfo,
  getUser,
  hideUserModal,
  updateUser,
  getFaculty,
  updateFaculty,
  updateInfo,
} from "../../../redux/actions";
import {
  FacultyState$,
  InfoState$,
  LoginsState$,
  UserModalState$,
  UserState$,
} from "../../../redux/selectors";
import { messageError } from "../../message";
import React from "react";
import * as actions from "../../../redux/actions";

// export default function UserModal({currentId, setCurrentId}) {
export default function UserModal({ currentId, setCurrentId }) {
  const dispatch = useDispatch();

  const { isShow } = useSelector(UserModalState$);

  const Users = useSelector(UserState$);

  const Info = useSelector(InfoState$);

  const [data, setData] = useState({
    username: "",
    password: "",
    name: "",
    confirmPassword: "",
    role: "",
    faculty: "",
  });

  const UserValue = Users.find((User) =>
    User._id === currentId ? User : null
  );

  useEffect(() => {
    if (UserValue) setData(UserValue);
  }, [UserValue]);

  useEffect(() => {
    dispatch(getFaculty.getFacultyRequest());
  }, [dispatch]);

  const Faculty = useSelector(FacultyState$);

  const currentUser = useSelector(LoginsState$);

  const Options = Faculty.map((data) => {
    var o = Object.assign({});
    o.value = data._id;
    o.label = `${data.name + " - " + data.username}`;
    return o;
  });

  const [form] = Form.useForm();

  const checkData = () => {
    const isExisUser = Users.find((User) =>
      User.username === data.username ? true : false
    );
    if (data.role !== "Khoa") {
      if (data.role !== "Giang Vien") {
        messageError("Lo???i t??i kho???n kh??ng h???p l???");
        return false;
      }
    }
    if (currentId !== null) {
      return true;
    } else {
      if (isExisUser) {
        messageError("???? t???n t??n t??i kho???n");
        return false;
      }
    }

    if (!data.username) {
      messageError("Ch??a nh???p t??n t??i kho???n");
      return false;
    }
    if (!data.password) {
      messageError("Cha nh???p m???t kh???u");
      return false;
    }
    if (data.password != data.confirmPassword) {
      messageError("X??c nh???n m???t kh???u kh??ng ch??nh x??c");
      return false;
    }
    return true;
  };

  const onClose = useCallback(() => {
    dispatch(hideUserModal());
    setCurrentId(null);
    setData({
      username: "",
      password: "",
      name: "",
      newPassword: "",
      confirmPassword: "",
      faculty: "",
    });
  }, [dispatch, setCurrentId]);

  const info = {
    username: data.username,
    name: data.name,
    dateOfBirth: new Date(),
    email: "",
    contract: "",
    phoneNumber: "",
    level: "",
    facultyId: "",
  };

  const faculty = {
    username: data.username,
    name: data.name,
  };

  const onSubmit = useCallback(() => {
    if (checkData()) {
      if (currentId !== null) {
        dispatch(updateUser.updateUserRequest(data));
        if (data.role === "Khoa") {
          dispatch(updateFaculty.updateFacultyRequest(faculty));
        } else {
          const currentInfo = Info.find((Info) =>
            Info.username === UserValue.username ? Info : null
          );
          const infoDepartment1 = {
            username: data.username,
            name: data.name,
            dateOfBirth: new Date(),
            email: "",
            contract: "",
            phoneNumber: "",
            level: "",
            facultyId: currentInfo.facultyId._id,
          };
          if (currentUser.role === "Khoa") {
            dispatch(updateInfo.updateInfoRequest(infoDepartment1));
          } else {
            dispatch(updateInfo.updateInfoRequest(infoDepartment1));
          }
        }
      } else {
        info.facultyId = data.faculty.toString();
        dispatch(createUser.createUserRequest(data));
        if (data.role === "Khoa") {
          dispatch(createFaculty.createFacultyRequest(faculty));
        } else if (currentUser.role === "Khoa") {
          const currentFaculty = Faculty.find((faculty) => {
            return faculty.username === currentUser.username;
          });
          const infoDepartment = {
            username: data.username,
            name: data.name,
            dateOfBirth: new Date(),
            email: "",
            contract: "",
            phoneNumber: "",
            level: "",
            facultyId: currentFaculty._id,
          };
          dispatch(createInfo.createInfoRequest(infoDepartment));
        } else {
          dispatch(createInfo.createInfoRequest(info));
        }
      }
    }
    onClose();
  }, [dispatch, onClose, checkData]);

  const onDisplaySearch = (inputValue, path) => {
    return path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };
  const bodyAdmin = (
    <>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 50 }}
        layout="horizontal"
      >
        <Form.Item label="Lo???i t??i kho???n" required>
          {currentId !== null ? (
            <div>{data.role}</div>
          ) : (
            <Select
              placeholder="Ch???n lo???i t??i kho???n"
              value={data.role}
              onChange={(e) => setData({ ...data, role: e })}
            >
              <Option value="Khoa">Khoa</Option>
              <Option value="Giang Vien">Gi???ng Vi??n</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="T??n" required>
          <Input
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item label="T??n t??i kho???n" required>
          {currentId !== null ? (
            <div>{data.username}</div>
          ) : (
            <Input
              // readOnly={true}

              value={data.username}
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
              }}
            />
          )}
        </Form.Item>
        {currentId !== null ? null : (
          <Form.Item label="T??n khoa" required>
            <Cascader
              options={Options}
              placeholder="Nh???p t??n khoa"
              value={data.faculty}
              onChange={(e) => {
                setData({ ...data, faculty: e });
              }}
              allowClear
              suffixIcon={<SearchOutlined />}
              showSearch={onDisplaySearch}
              disabled={data.role !== "Giang Vien"}
            ></Cascader>
          </Form.Item>
        )}

        <Form.Item label="M???t kh???u" required>
          <Input.Password
            placeholder="Nh???p m???t kh???u"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item label="X??c nh???n m???t kh???u m???i" required>
          <Input.Password
            placeholder="X??c nh???n m???t kh???u"
            value={data.confirmPassword}
            onChange={(e) => {
              setData({ ...data, confirmPassword: e.target.value });
            }}
          />
        </Form.Item>
      </Form>
    </>
  );

  const bodyFaculty = (
    <>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 50 }}
        layout="horizontal"
      >
        <Form.Item label="Lo???i t??i kho???n" required>
          <Select
            placeholder="Ch???n lo???i t??i kho???n"
            value={data.role}
            onChange={(e) => setData({ ...data, role: e })}
          >
            <Option value="Giang Vien">Gi???ng Vi??n</Option>
          </Select>
        </Form.Item>
        <Form.Item label="T??n" required>
          <Input
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item label="T??n t??i kho???n" required>
          {currentId !== null ? (
            <div>{data.username}</div>
          ) : (
            <Input
              value={data.username}
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
              }}
            />
          )}
        </Form.Item>
        <Form.Item label="M???t kh???u" required>
          <Input.Password
            placeholder="Nh???p m???t kh???u"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item label="X??c nh???n m???t kh???u m???i" required>
          <Input.Password
            placeholder="X??c nh???n m???t kh???u"
            value={data.confirmPassword}
            onChange={(e) => {
              setData({ ...data, confirmPassword: e.target.value });
            }}
          />
        </Form.Item>
      </Form>
    </>
  );
  //#endregion

  if (currentUser.role === "Admin") {
    return (
      <div>
        <Modal
          title={currentId ? "Ch???nh s???a t??i kho???n" : "Th??m t??i kho???n"}
          visible={isShow}
          onCancel={onClose}
          width={800}
          footer={[
            <Button key="back" onClick={onClose} style={{margin:"0px 12px 0px 0px"}}>
              H???y
            </Button>,
            <Button key="submit" type="primary" onClick={onSubmit} style={{margin:"0px 7px 0px 0px"}}>
              {currentId ? "L??u" : "T???o"}
            </Button>,
          ]}
        >
          {bodyAdmin}
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Modal
          title={currentId ? "Ch???nh s???a t??i kho???n" : "Th??m t??i kho???n"}
          visible={isShow}
          onOk={onSubmit}
          onCancel={onClose}
          footer={[
            <Button key="back" onClick={onClose} style={{margin:"0px 12px 0px 0px"}}>
              H???y
            </Button>,
            <Button key="submit" type="primary" onClick={onSubmit} style={{margin:"0px 7px 0px 0px"}}>
              {currentId ? "L??u" : "T???o"}
            </Button>,
          ]}
          width={800}
        >
          {bodyFaculty}
        </Modal>
      </div>
    );
  }
}
//#endregion
