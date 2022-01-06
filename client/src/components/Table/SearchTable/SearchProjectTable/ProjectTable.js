import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Table } from "ant-table-extensions";
import { Button, Dropdown, Input, Menu, Row } from "antd";
import Password from "antd/lib/input/Password";
import useSelection from "antd/lib/table/hooks/useSelection";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpandedRowRender from "./ExpandedRowRender";

export default function LecturerTable({ dataSource, setCurrentId }) {
  //Create Table
  const columns = [
    // {
    //     title: "",
    //     key: "createdAt",
    //     sorter: (a, b) => moment(a.createdAt) - moment(b.createdAt),
    //   },
    //   {
    //     title: "Tên giảng viên",
    //     dataIndex: "name",
    //     filterDropdown: ({
    //       setSelectedKeys,
    //       selectedKeys,
    //       confirm,
    //       clearFilters,
    //     }) => {
    //       return (
    //         <div>
    //           <Input.Search
    //             allowClear
    //             autoFocus
    //             style={{ width: 200 }}
    //             placeholder="Nhập tên giảng viên cần tìm"
    //             value={selectedKeys[0]}
    //             onChange={(e) => {
    //               setSelectedKeys(e.target.value ? [e.target.value] : []);
    //               confirm({ closeDropdown: false });
    //             }}
    //             onPressEnter={() => {
    //               confirm();
    //             }}
    //             onBlur={() => {
    //               confirm();
    //             }}
    //             onSearch={() => {
    //               confirm();
    //             }}
    //           />
    //         </div>
    //       );
    //     },
    //     filterIcon: () => {
    //       return <SearchOutlined />;
    //     },
    //     onFilter: (value, record) => {
    //       return record.name.toLowerCase().includes(value.toLowerCase());
    //     }
    // },
    {
      title: "Mã đề tài",
      dataIndex: "MaDeTai",
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
        return record.MaDeTai.toLowerCase().includes(value.toLowerCase());
      }
    },
    {
        title: "Tên đề tài",
        dataIndex: "TenDeTai",
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
                placeholder="Nhập tên đề tài"
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
          return record.TenDeTai.toLowerCase().includes(value.toLowerCase());
        }
      },
    
      {
        title: "Lĩnh vực",
        dataIndex: "LinhVuc",
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
          return record.LinhVuc.toLowerCase().includes(value.toLowerCase());
        }
      },
      {
        title: "Tình trạng",
        dataIndex: "TinhTrang",
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
          return record.TinhTrang.toLowerCase().includes(value.toLowerCase());
        }
      },
      {
        title: "Điểm",
        dataIndex: "Diem",
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
          return record.Diem.toLowerCase().includes(value.toLowerCase());
        }
      },
  ];
  

  //Table
  return (
    <>
      <div >
        <Table
          tableLayout="auto"
          style={{ borderRadius: "5px"}}
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
            rowExpandable: (record) => true,
          }}
          pagination={true}
          rowKey="_id"
          scroll={{ x: 1000 }}
        ></Table>
      </div>
    </>
  );
}
