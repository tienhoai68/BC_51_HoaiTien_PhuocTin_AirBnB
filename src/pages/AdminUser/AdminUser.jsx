import React, { Fragment, useEffect, useState } from "react";
import { adminUsersService } from "../../services/AdminUser";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";

import "./AdminUser.scss";

export default function AdminUser() {
  const navigate = useNavigate();
  const { Search } = Input;
  const [userState, setUserState] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      sorter: (a, b) => {
        let roleA = a.role.toLowerCase().trim();
        let roleB = b.role.toLowerCase().trim();
        if (roleA > roleB) {
          return 1;
        }
        return -1;
      },
      sortOrder: sortedInfo.columnKey === "role" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, user) => {
        return (
          <Fragment>
            <button
              onClick={() => navigate(`/admin/editUser/${user.id}`)}
              className="btn-edit mr-2 "
            >
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <button className="btn-delete">
              <i className="fa-solid fa-trash" />
            </button>
          </Fragment>
        );
      },
    },
  ];
  const data = userState;

  useEffect(() => {
    fetchAdminUserApi();
  }, []);

  const fetchAdminUserApi = async () => {
    const result = await adminUsersService.fetchAdminUserApi();
    setUserState(result.data.content);
    console.log(result.data.content);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="container m-5 mx-auto adminUser-main">
      <div className="title-adminUser m-5">
        <h1 className="title-admin">User Admin</h1>
        <button
          onClick={() => navigate("/admin/addUser")}
          className="btn-addUser"
        >
          ADD USER
        </button>
        <Search
          placeholder="input search text"
          allowClear
          size="large"
          onSearch={onSearch}
        />
      </div>

      <hr />
      <Table
        className="table-AddminUser"
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      />
    </div>
  );
}
