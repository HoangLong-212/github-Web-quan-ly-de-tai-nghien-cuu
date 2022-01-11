import React from "react";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Table } from "ant-table-extensions";
import { Button, Dropdown, Input, Menu, Row, Space } from "antd";
import Password from "antd/lib/input/Password";
import useSelection from "antd/lib/table/hooks/useSelection";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserState$ } from "../../../redux/selectors";
import ExpandedRowRender from "./ExpandedRowRender";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Column, ColumnGroup } = Table;
export default function UserTable({ dataSource, setCurrentId, check }) {
  
  console.log("abc",check)
  //Create Table
  const columns = [
    {
      title: "Tên tài khoản",
      dataIndex: "username",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div>
            <Input.Search
              allowClear
              autoFocus
              style={{ width: 200 }}
              placeholder="Nhập tên tài khoản cần tìm"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.username.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
      render: (text) => (
        <>
          {check === "Tắt" ? (
            <>{text.replaceAll(/./g, "*")}</>
          ) : (
            <>{text}</>
          )}
        </>
      ),
    },
   
  ];

  //Table
  return (
    <>
      <div>
        <Table
          tableLayout="auto"
          searchable
          searchableProps={{
            inputProps: {
              placeholder: "Nhập tên tài khoản",
              prefix: <SearchOutlined />,
              width: 200,
            },
          }}
          columns={columns}
          dataSource={dataSource}
          expandable={{
            expandedRowRender: (record) => (
              <ExpandedRowRender record={record} setCurrentId={setCurrentId} />
            ),
            rowExpandable: (record) => record.username!=="admin",
          }}
          pagination={true}
          rowKey="_id"
          scroll={{ x: 1000 }}
        ></Table>
      </div>
    </>
  );
}
