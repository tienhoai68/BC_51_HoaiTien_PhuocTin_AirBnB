import React, { Fragment, useEffect, useState } from "react";
import { Input, Table } from "antd";
import { adminRoomService } from "../../services/AdminRoom";
import { useNavigate } from "react-router-dom";

export default function AdminRoom() {
  const navigate = useNavigate();
  const { Search } = Input;
  const [stateRoom, setStateRoom] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  useEffect(() => {
    fetchAdminRoomApi();
  }, []);
  const fetchAdminRoomApi = async () => {
    const result = await adminRoomService.fetchAdminRoomApi();
    console.log(result.data.content);
    setStateRoom(result.data.content);
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
      title: "Tên Phòng",
      dataIndex: "tenPhong",
      key: "tenPhong",
      sorter: (a, b) => {
        let tenPhongA = a.tenPhong.toLowerCase().trim();
        let tenPhongB = b.tenPhong.toLowerCase().trim();
        if (tenPhongA > tenPhongB) {
          return 1;
        }
        return -1;
      },
      sortOrder: sortedInfo.columnKey === "tenPhong" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, room) => {
        return (
          <Fragment>
            <img src={room.hinhAnh} alt="..." width={200} height={200} />
          </Fragment>
        );
      },
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      render: (text, room) => {
        return (
          <Fragment>
            {room.moTa.length > 50
              ? room.moTa.substr(0, 50) + "...."
              : room.moTa}
          </Fragment>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, room) => {
        return (
          <Fragment>
            <button className="btn-edit mr-2 ">
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
  const data = stateRoom;
  const handleSearch = (event) => {
    console.log(event.target.value);
  };
  const onSearch = async (value, _e) => {
    console.log(value);
  };
  return (
    <div className="container m-5 mx-auto adminUser-main">
      <div className="title-adminUser m-5">
        <h1 className="title-admin">Admin Room</h1>
        <button onClick={() => navigate("/admin/")} className="btn-addUser">
          ADD ROOM
        </button>
        <Search
          onChange={handleSearch}
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
