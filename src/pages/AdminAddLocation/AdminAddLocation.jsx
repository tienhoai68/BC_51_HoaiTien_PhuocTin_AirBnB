import { Form } from "antd";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { adminLocalService } from "../../services/AdminLocation";
import { useNavigate } from "react-router-dom";

export default function AdminAddLocation() {
  const navigate = useNavigate();
  const [addLocation, setAddLocation] = useState({
    tenViTri: "",
    tinhThanh: "",
    quocGia: "",
    hinhAnh: "",
  });

  const handleChange = (event) => {
    setAddLocation({
      ...addLocation,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      const result = await adminLocalService.fetchAdminAddLocationApi(
        addLocation
      );
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Thêm vị trí thành công !",
      });
      if (result.data.content) {
        navigate(`/admin/location`);
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
    <div className="container mx-auto py-5">
      <div className="md:block text-center text-3xl text-blue-800">
        <h1>Thêm Vị Trí</h1>
      </div>
      <Form
        onSubmitCapture={handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 1000,
        }}
      >
        <Form.Item label="Tên Vị Trí: ">
          <input
            type="text"
            onChange={handleChange}
            name="tenViTri"
            className="border text-sm rounded-md w-2/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Tỉnh Thành: ">
          <input
            type="text"
            onChange={handleChange}
            name="tinhThanh"
            className="border text-sm rounded-md w-2/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Quốc Gia: ">
          <input
            type="text"
            onChange={handleChange}
            name="quocGia"
            className="border text-sm rounded-md w-2/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Action">
          <button
            type="submit"
            className=" font-medium text-sm py-2.5 mr-2 mb-2 bg-blue-500 p-3 rounded-md"
          >
            Thêm
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
