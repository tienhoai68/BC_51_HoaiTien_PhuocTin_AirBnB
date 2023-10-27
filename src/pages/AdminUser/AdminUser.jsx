import React, { Fragment, useEffect, useState } from "react";
import { adminUsersService } from "../../services/AdminUser";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";

import "./AdminUser.scss";
import Swal from "sweetalert2";

export default function AdminUser() {
  const navigate = useNavigate();
  const { Search } = Input;
  const [userState, setUserState] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
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
              className="btnUser-edit mr-2 "
            >
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <button
              onClick={() => fetchAdminDelete(user.id)}
              className="btnUser-delete"
            >
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
  };
  const fetchAdminDelete = async (id) => {
    try {
      const result = await adminUsersService.fetchAdminDeleteApi(id);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Xóa User thành công !",
      });

      fetchAdminUserApi();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.content}`,
      });
    }
  };

  const onSearch = async (value, _e) => {
    if (value) {
      const result = await adminUsersService.fetchAdminSearchApi(value);
      setUserState(result.data.content);
    } else {
      fetchAdminUserApi();
    }
  };

  const handlSearch = async (event) => {
    if (event.target.value) {
      const result = await adminUsersService.fetchAdminSearchApi(
        event.target.value
      );
      setUserState(result.data.content);
    } else {
      fetchAdminUserApi();
    }
  };
  return (
    <div className="container m-5 mx-auto adminUser-main">
      <div className="title-adminUser m-5">
        <h1 className="title-admin">User Admin</h1>
        <button
          onClick={() => navigate("/admin/addUser")}
          className="btn-add"
        >
          ADD USER
        </button>
        <Search
          onChange={handlSearch}
          placeholder="Tìm kiếm theo tên ..."
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
