import React, { Fragment, useEffect, useState } from "react";
import { Input, Table } from "antd";
import { adminBookRoomService } from "../../services/AdminBookRoom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminBookRoom() {
  const navigate = useNavigate();
  const { Search } = Input;
  const [bookRoomList, setBookRoomList] = useState([]);
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
      width: "10%",
    },
    {
      title: "Mã Phòng",
      dataIndex: "maPhong",
      width: "10%",
    },
    {
      title: "Số Khách",
      dataIndex: "soLuongKhach",
      width: "10%",
    },
    {
      title: "Mã người dùng",
      dataIndex: "maNguoiDung",
      width: "10%",
    },
    {
      title: "Ngày Đến",
      dataIndex: "ngayDen",
      width: "20%",
    },
    {
      title: "Ngày Đi",
      dataIndex: "ngayDi",
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "10%",
      render: (text, bookRoom) => {
        return (
          <Fragment>
            <button
              onClick={() => navigate(`/admin/bookroom/${bookRoom.id}`)}
              className="mr-2"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <button onClick={() => handleDelete(bookRoom.id)}>
              <i className="fa-solid fa-trash" />
            </button>
          </Fragment>
        );
      },
    },
  ];
  const data = bookRoomList;
  useEffect(() => {
    bookRoomListApi();
  }, []);

  const bookRoomListApi = async () => {
    const result = await adminBookRoomService.fetchAdminBookRoomListApi();
    setBookRoomList(result.data.content);
  };
  const handleDelete = async (id) => {
    try {
      const result = await adminBookRoomService.fetchAdminDeleteBookRoomListApi(
        id
      );
      if (result.data.content === null) {
        bookRoomListApi();
      }
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Xóa phòng đặt thành công !",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.content}`,
      });
    }
  };
  const valicationNumber = (value, mes) => {
    if (/^[0-9]+$/.test(value)) {
      return true;
    }
    alert(mes);
    return false;
  };
  const handleSearch = async (event) => {
    if (event.target.value) {
      let isValid = true;
      isValid = valicationNumber(event.target.value, "Vui lòng nhập số !!!");
      if (isValid) {
        const result = await adminBookRoomService.fetchAdminSearchBookRoomApi(
          event.target.value
        );
        setBookRoomList(result.data.content);
      }
    } else {
      bookRoomListApi();
    }
  };

  const onSearch = async (value, _e) => {
    if (value !== "") {
      let isValid = true;
      isValid = valicationNumber(value, "Nhập số !!!");
      if (isValid) {
        const result = await adminBookRoomService.fetchAdminSearchBookRoomApi(
          value
        );
        setBookRoomList(result.data.content);
      }
    } else {
      bookRoomListApi();
    }
  };
  return (
    <div className="container m-5 mx-auto adminUser-main">
      <div className="title-adminUser m-5">
        <h1 className=" mb-5 title-admin">Book Room</h1>
        <Search
          onChange={handleSearch}
          placeholder="Tìm kiếm theo mã người dùng ..."
          allowClear
          size="large"
          onSearch={onSearch}
        />
      </div>
      <hr />

      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
}