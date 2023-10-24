import React, { Fragment, useEffect, useState } from "react";
import { adminCommentService } from "../../services/AdminComment";
import { Table } from "antd";
import { Input } from "antd";
import Swal from "sweetalert2";

import "./AdminComment.scss";
export default function AdminComment() {
  const { Search } = Input;
  const [commentList, setCommentList] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "10%",
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Mã Phòng",
      dataIndex: "maPhong",
      width: "5%",
    },
    {
      title: "Mã Người Bình Luận",
      dataIndex: "maNguoiBinhLuan",
      width: "10%",
    },
    {
      title: "Đánh Giá",
      dataIndex: "saoBinhLuan",
      width: "5%",
    },

    {
      title: "Ngày Bình Luận",
      dataIndex: "ngayBinhLuan",
      width: "30%",
    },

    {
      title: "Nội dung",
      dataIndex: "noiDung",
      width: "30%",
      render: (text, comment) => {
        return (
          <Fragment>
            {comment.noiDung.length > 50
              ? comment.noiDung.substr(0, 50) + "..."
              : comment.noiDung}
          </Fragment>
        );
      },
    },
    {
      title: "Hành Động",
      dataIndex: "action",
      width: "10%",
      render: (text, comment) => {
        return (
          <Fragment>
            <button
              className="AdminCommentBtn"
              onClick={() => handleDeleteComment(comment.id)}
            >
              <i className="fa-solid fa-trash btn-deleteComment" />
            </button>
          </Fragment>
        );
      },
    },
  ];
  const data = commentList;
  useEffect(() => {
    fetchCommentApi();
  }, []);

  const fetchCommentApi = async () => {
    const result = await adminCommentService.fetchAdminCommentApi();
    setCommentList(result.data.content);
  };
  const valicationSearch = (value, mes) => {
    if (/^[0-9]+$/.test(value)) {
      return true;
    }
    alert(mes);
    return false;
  };

  const handleSearch = async (event) => {
    if (event.target.value) {
      let isValid = true;
      isValid = valicationSearch(event.target.value, "Vui Lòng Nhập Số");
      if (isValid) {
        const result = await adminCommentService.fetchAdminSearchCommentApi(
          event.target.value
        );
        setCommentList(result.data.content);
      }
    } else {
      fetchCommentApi();
    }
  };
  const onSearch = async (value, _e) => {
    if (value !== "") {
      let isValid = true;
      isValid = valicationSearch(value, "Vui Lòng Nhập Số");
      if (isValid) {
        const result = await adminCommentService.fetchAdminSearchCommentApi(
          value
        );
        setCommentList(result.data.content);
      }
    } else {
      fetchCommentApi();
    }
  };
  const handleDeleteComment = async (id) => {
    try {
      const result = await adminCommentService.fetchAdminDeleteCommentApi(id);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Xóa bình luận thành công !",
      });
      if (result.data.content === null) {
        fetchCommentApi();
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
    <div className="container m-5 mx-auto adminComment-main">
      <div className="title-adminComment m-5">
        <h1 className=" mb-5 title-admin">Admin Comment</h1>
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
