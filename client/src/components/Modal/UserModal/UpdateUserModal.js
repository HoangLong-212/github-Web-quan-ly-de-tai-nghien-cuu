// import { Form, Input, Select } from "antd";
// import { Option } from "antd/lib/mentions";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   FacultyState$,
//   LoginsState$,
//   UpdateUserModalState$,
// } from "../../../redux/selectors";

// export default function UpdateUserModal() {
//   const { isShow } = useSelector(UpdateUserModalState$);
//   const Faculty = useSelector(FacultyState$);
//   const user = useSelector(LoginsState$);

//   const FacultyValue = Faculty.find(
//     (Faculty) => Faculty.username === user.username
//   );
//   const [data, setData] = useState(
//     //     {
//     //     username: "",
//     //     name: "",
//     //     dateOfBirth: new Date(),
//     //     faculty: "",
//     //     email: "",
//     //     contract: "",
//     //     phoneNumber: "",
//     //     level: "",
//     //     facultyId: "",
//     // }
//     FacultyValue
//   );
//   const [form] = Form.useForm();
//   const bodyFaculty = (
//     <>
//       <Form
//         form={form}
//         labelCol={{ span: 6 }}
//         wrapperCol={{ span: 50 }}
//         layout="horizontal"
//       >
//         <Form.Item label="Loại tài khoản" required>
//           {/* <Input
//             placeholder="Khoa/Giang Vien"
//             value={data.role}
//             onChange={(e) => {
//               setData({ ...data, role: e.target.value });
//             }}
//           /> */}
//           <Select
//             placeholder="Chọn loại tài khoản"
//             value={data.role}
//             onChange={(e) => setData({ ...data, role: e })}
//           >
//             <Option value="Giang Vien">Giảng Viên</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Tên" required>
//           <Input
//             value={data.name}
//             onChange={(e) => {
//               setData({ ...data, name: e.target.value });
//             }}
//           />
//         </Form.Item>
//         <Form.Item label="Tên tài khoản" required>
//           <Input
//             // readOnly={true}
//             value={data.username}
//             onChange={(e) => {
//               setData({ ...data, username: e.target.value });
//             }}
//           />
//         </Form.Item>
//         <Form.Item label="Mật khẩu" required>
//           <Input.Password
//             placeholder="Nhập mật khẩu"
//             value={data.password}
//             onChange={(e) => {
//               setData({ ...data, password: e.target.value });
//             }}
//           />
//         </Form.Item>
//         <Form.Item label="Xác nhận mật khẩu mới" required>
//           <Input.Password
//             placeholder="Xác nhận mật khẩu"
//             value={data.confirmPassword}
//             onChange={(e) => {
//               setData({ ...data, confirmPassword: e.target.value });
//             }}
//           />
//         </Form.Item>
//       </Form>
//     </>
//   );
// }
