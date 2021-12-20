import React from "react";
import {
  Modal,
  Form,
  Select,
  Button,
  InputNumber,
  Input,
  Space,
  message,
  AutoComplete,
  Upload,
  Row,
  DatePicker,
} from "antd";
import { ModalState$ } from "../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../../redux/actions";

const { Option } = Select;
const { TextArea } = Input;
export default function DangKyModal() {
  const dispatch = useDispatch();
  const { isShow } = useSelector(ModalState$);
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

  const handleCancel = React.useCallback(() => {
    dispatch(hideModal());
  });
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  // const SPMau = SP.map((data) => data.MauSac);
  // const SPMaus = SPMau.filter((item, index) => (
  // SPMau.indexOf(item) === index));
  // const optionsMau = SPMaus.map((data) => {
  //   var o = Object.assign({});
  //   o.value = data;
  //   o.label = `${data}`;
  //   return o;
  // });

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
        <div>Thông tin đề tài:</div>
        <Form.Item label="Mã đề tài" style={{ marginBottom: 0 }} required>
          <Row>
            <Form.Item
              style={{ display: "inline-block", width: "calc(30% - 12px)" }}
            >
              <div>DT001</div>
            </Form.Item>
            <Form.Item
              required
              style={{ width: "calc(50% - 12px)", marginLeft: 50 }}
              rules={[{ required: true, message: "Vui lòng nhập ngày" }]}
              label=" Ngày đăng ký"
            >
              <DatePicker format={"DD/MM/YYYY"} min />
            </Form.Item>
          </Row>
        </Form.Item>

        <Form.Item
          // {...formItemLayout}
          //name="username"
          label="Tên đề tài"
          rules={[
            {
              required: true,
              message: "Nhập tên đề tài",
            },
          ]}
        >
          <Input placeholder="Nhập tên đề tài" />
        </Form.Item>

        <Form.Item label="Cấp độ" style={{ marginBottom: 0 }} required>
          <Row>
            <Form.Item
              style={{ display: "inline-block", width: "calc(30% - 12px)" }}
            >
              <Select
                placeholder="Chọn cấp độ"
                //value={data.BaoHanh}
                //onChange={(e) => setData({ ...data, BaoHanh: e })}
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
                //value={data.BaoHanh}
                //onChange={(e) => setData({ ...data, BaoHanh: e })}
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
            // value={data.MoTa}
            // defaultValue={data.MoTa}
            // onChange={(e) => setData({ ...data, MoTa: e.target.value })}
          />
        </Form.Item>
        <div>Thông tin nhóm thực hiện:</div>
        <Form.Item
          label="Chủ nhiệm đề tài"         
          required
        >
          {/* <Input
            value={data.MauSac}
            defaultValue={data.MauSac}
            onChange={(e) => setData({ ...data, MauSac: e.target.value })}
            placeholder="Nhập màu"
          /> */}
          <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            //options={optionsMau}
            //value={data.MauSac}
            filterOption
            // onSelect={(e) => {
            //   setData({ ...data, MauSac: e });
            // }}
          >
            <Input.Search
              allowClear
              size="medium"
              placeholder="Nhập tên chủ nhiệm đề tài"
              // onChange={(e)=>setData({ ...data, MauSac: e.target.value })}
              // value={data.MauSac}
            />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          label="Giảng viên 1"         
          
        >
          {/* <Input
            value={data.MauSac}
            defaultValue={data.MauSac}
            onChange={(e) => setData({ ...data, MauSac: e.target.value })}
            placeholder="Nhập màu"
          /> */}
          <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            //options={optionsMau}
            //value={data.MauSac}
            filterOption
            // onSelect={(e) => {
            //   setData({ ...data, MauSac: e });
            // }}
          >
            <Input.Search
              allowClear
              size="medium"
              placeholder="Nhập tên giảng viên"
              // onChange={(e)=>setData({ ...data, MauSac: e.target.value })}
              // value={data.MauSac}
            />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          label="Giảng viên 2"         
          
        >
          {/* <Input
            value={data.MauSac}
            defaultValue={data.MauSac}
            onChange={(e) => setData({ ...data, MauSac: e.target.value })}
            placeholder="Nhập màu"
          /> */}
          <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            //options={optionsMau}
            //value={data.MauSac}
            filterOption
            // onSelect={(e) => {
            //   setData({ ...data, MauSac: e });
            // }}
          >
            <Input.Search
              allowClear
              size="medium"
              placeholder="Nhập tên giảng viên"
              // onChange={(e)=>setData({ ...data, MauSac: e.target.value })}
              // value={data.MauSac}
            />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          label="Giảng viên 3"         
          
        >
          {/* <Input
            value={data.MauSac}
            defaultValue={data.MauSac}
            onChange={(e) => setData({ ...data, MauSac: e.target.value })}
            placeholder="Nhập màu"
          /> */}
          <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            //options={optionsMau}
            //value={data.MauSac}
            filterOption
            // onSelect={(e) => {
            //   setData({ ...data, MauSac: e });
            // }}
          >
            <Input.Search
              allowClear
              size="medium"
              placeholder="Nhập tên giảng viên"
              // onChange={(e)=>setData({ ...data, MauSac: e.target.value })}
              // value={data.MauSac}
            />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          label="Giảng viên 4"         
          
        >
          {/* <Input
            value={data.MauSac}
            defaultValue={data.MauSac}
            onChange={(e) => setData({ ...data, MauSac: e.target.value })}
            placeholder="Nhập màu"
          /> */}
          <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            //options={optionsMau}
            //value={data.MauSac}
            filterOption
            // onSelect={(e) => {
            //   setData({ ...data, MauSac: e });
            // }}
          >
            <Input.Search
              allowClear
              size="medium"
              placeholder="Nhập tên giảng viên"
              // onChange={(e)=>setData({ ...data, MauSac: e.target.value })}
              // value={data.MauSac}
            />
          </AutoComplete>
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
        //   onOk={handleOk}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={{}}>
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
