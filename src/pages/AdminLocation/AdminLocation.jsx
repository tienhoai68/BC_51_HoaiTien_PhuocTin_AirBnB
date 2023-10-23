import { Table } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { adminLocalService } from "../../services/AdminLocation";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminLocation() {
  const navigate = useNavigate();
  const [localState, setLocalState] = useState();
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, location) => {
        return (
          <Fragment>
            <img src={location.hinhAnh} alt="..." width={200} height={200} />
          </Fragment>
        );
      },
    },
    {
      title: "Tên Vị Trí",
      dataIndex: "tenViTri",
    },
    {
      title: "Tỉnh Thành",
      dataIndex: "tinhThanh",
    },
    {
      title: "Quốc Gia",
      dataIndex: "quocGia",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, location) => {
        return (
          <Fragment>
            <button
              onClick={() => navigate(`/admin/editlocation/${location.id}`)}
              className="btn-edit mr-2 "
            >
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <button
              onClick={() => handleDeleteLocation(location.id)}
              className="btn-delete mr-2"
            >
              <i className="fa-solid fa-trash" />
            </button>
          </Fragment>
        );
      },
    },
  ];
  const data = localState;
  useEffect(() => {
    fetchAdminLocationApi();
  }, []);
  const fetchAdminLocationApi = async () => {
    const result = await adminLocalService.fetchAdminLocationApi();
    setLocalState(result.data.content);
  };
  const handleDeleteLocation = async (id) => {
    try {
      const result = await adminLocalService.fetchAdminDeleteLocationApi(id);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Thêm phòng thành công !",
      });
      if (result.data.statusCode === 200) {
        fetchAdminLocationApi();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.content}`,
      });
    }
  };
  return (
    <div className="container m-5 mx-auto adminUser-main">
      <div className="title-adminUser m-5">
        <h1 className="title-admin">Admin Location</h1>
        <button
          onClick={() => navigate(`/admin/addlocation`)}
          className="btn-addUser"
        >
          ADD LOCATION
        </button>
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