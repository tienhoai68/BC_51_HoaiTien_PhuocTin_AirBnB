import { Form } from "antd";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { adminLocalService } from "../../services/AdminLocation";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminAddLocation() {
  const params = useParams();
  const navigate = useNavigate();
  const [editLocation, setEditLocation] = useState({
    tenViTri: "",
    tinhThanh: "",
    quocGia: "",
    hinhAnh: "",
  });
  useEffect(() => {
    fetchLocationDetail();
  }, []);
  const fetchLocationDetail = async () => {
    const result = await adminLocalService.fetchAdminDetailLocationApi(
      params.locationId
    );
    setEditLocation(result.data.content);
  };
  const handleChange = (event) => {
    setEditLocation({
      ...editLocation,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitEdit = async () => {
    try {
      const result = await adminLocalService.fetchAdminEditLocationApi(
        params.locationId,
        editLocation
      );
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Cập nhật vị trí thành công !",
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
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 1000,
        }}
        onSubmitCapture={handleSubmitEdit}
      >
        <Form.Item label="Tên Vị Trí: ">
          <input
            onChange={handleChange}
            value={editLocation.tenViTri}
            type="text"
            name="tenViTri"
            className="border text-sm rounded-md w-2/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Tỉnh Thành: ">
          <input
            onChange={handleChange}
            value={editLocation.tinhThanh}
            type="text"
            name="tinhThanh"
            className="border text-sm rounded-md w-2/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Quốc Gia: ">
          <input
            onChange={handleChange}
            value={editLocation.quocGia}
            type="text"
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
