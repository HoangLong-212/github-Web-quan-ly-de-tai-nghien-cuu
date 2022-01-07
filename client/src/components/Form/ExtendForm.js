import React from "react";
import "./style.css";
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
  import { useSelector, useDispatch } from "react-redux";
import { ExtendsState$, LoginsState$, ProjectState$ } from "../../redux/selectors";
import moment from "moment";
import * as actions from "../../redux/actions"
import {
  messageError,
  messageLoadingSuccess,
  messageSuccess,
} from "../message";

const { Option } = Select;
const { TextArea } = Input;

export default function ExtendForm() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const users = useSelector(LoginsState$);
  const Extend = useSelector(ExtendsState$)
  const projects = useSelector(ProjectState$)
  const project = projects.filter(
    (value) => value.idTeam.idChuNhiem.username === users.username && value.TinhTrang === "Đang tiến hành"
  )
  console.log("project",project)
  console.log("Extend",Extend)
  const [data, setData] = React.useState({
    MaDon: "",
    title: "",
    content: "",
    GiaHan: 0,
    idDeTai: "",
    status: "Chờ duyệt"
  });

  console.log("DATA",data)

  const RandomMaDon = React.useCallback(() => {
    if (data.MaDon === "" || data.MaDon === undefined) {
      let Extends;
      do {
        const min = 1000000;
        const max = 9999999;
        const rand = min + Math.random() * (max - min);
        const GH = "GH" + Math.round(rand);
        setData({ ...data, MaDon: GH });
        Extends = Extend.find((data) => data.MaDon === GH);
      } while (Extends !== undefined);
    }
  }, [dispatch, data]);

  const options = project.map((data) => {
    var o = Object.assign({});
    o.value = data._id;
    o.label = `${data.TenDeTai}`;
    return o;
  });
const onDisplaySearch = (inputValue, path) => {
    return path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };

  const handleOK = React.useCallback(()=>{
    console.log("ZZZZ",data)
    if( data.GiaHan >6 || data.GiaHan<1 ){
      messageError("Vui lòng nhập đúng thời gian gia hạn");
    }else if (
      data.MaDon === "" ||
      data.title === "" ||
      data.content === "" ||
      data.idDeTai === "" ||
      data.GiaHan === 0 
    ) {
      messageError("Vui lòng nhập đầy đủ thông tin");
    }
    else{
      dispatch(
        actions.createExtends.createExtendsRequest(data)
      );
      messageSuccess("Gửi đơn gia hạn thành công");
      handleReset();
  }}, [dispatch, data])

  const handleReset = React.useCallback(()=>{
    setData({
      MaDon: "",
      title: "",
      content: "",
      idDeTai: "",
      GiaHan: 0,
      status: "Chờ duyệt"
    });
  })

  const body = (
    <div className="Form">
      <Form
      form={form}
      
      labelCol=
      {{
        span: 4,
        
      }}
      wrapperCol=
      {{
        span: 30,
      }}

      layout="horizontal">
     <h2 className="Text">Đơn gia hạn:</h2>
     <Form.Item label="Mã đơn" style={{ marginBottom: 0 }} required>
          <Row>
            <Form.Item
              style={{ display: "inline-block", width: "calc(30% - 12px)" }}
            >
              <Input.Group compact>
                <Input
                  allowClear
                  style={{ width: "calc(100% - 31px)" }}
                  placeholder="Nhập mã đơn"
                  value={data.MaDon}
                  onChange={(e) =>
                    setData({ ...data, MaDon: e.target.value })
                  }
                  defaultValue={data.MaDon}
                />
                <Button icon={<RetweetOutlined />} onClick={RandomMaDon} />
              </Input.Group>
            </Form.Item>
            <Form.Item
              required
              style={{ width: "calc(70% - 60px)", marginLeft: 50 }}
              rules={[{ required: true, message: "Vui lòng nhập thời gian" }]}
              label=" Thời gian gia hạn (<= 6 tháng)"
              value={data.GiaHan}
              onChange={(e) =>
                setData({ ...data, GiaHan: Number(e.target.value) })
              }
            >
               <Input.Group compact>
                <Input
                  allowClear
                  style={{ width: "calc(100% - 31px)" }}
                  placeholder="Nhập thời gian"
                  addonAfter="tháng"
                  value={data.GiaHan}
                  onChange={(e) =>
                    setData({ ...data.GiaHan, GiaHan: Number(e.target.value) })
                  } 
                />
              </Input.Group>
            </Form.Item>
          </Row>
        </Form.Item>
        <Form.Item label="Đề tài" required>
          <Cascader
            options={options}
            style={{ width: "calc(100% - 52px)" }}
            placeholder="Mời chọn đề tài cần gia hạn"
            value={data.idDeTai}
            onChange={(e) => setData({ ...data, idDeTai: e })}
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
          style={{ width: "calc(100% - 52px)" }}
            placeholder="Nhập tiêu đề"
            value={data.title}
            onChange={(e) =>
              setData({ ...data, title: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Lý do gia hạn" required>
          <TextArea
           style={{ width: "calc(100% - 52px)" }}
            allowClear
            rows={7}
            placeholder="Nhập lý do"
            value={data.content}
            onChange={(e) =>
              setData({ ...data, content: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item wrapperCol={{  offset: 18 }}>
        <Button key="reset" onClick={handleReset} style={{marginLeft: 19}}>
            Reset
          </Button>
          <Button key="submit" type="primary" onClick={handleOK} style={{marginLeft: 15}}>
            Summit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
  return (

   <div>
      {body}
      </div>
  )
 
}
