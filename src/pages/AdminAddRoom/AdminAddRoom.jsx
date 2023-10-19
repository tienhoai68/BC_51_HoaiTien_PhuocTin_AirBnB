import React, { useState } from "react";
import { Form, Switch } from "antd";

import "./AdminAddRoom.scss";
import { adminRoomService } from "../../services/AdminRoom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function AdminAddRoom() {
  const navigate = useNavigate();
  const [roomState, setRoomState] = useState({
    tenPhong: "",
    khach: 0,
    phongNgu: 0,
    giuong: 0,
    phongTam: 0,
    moTa: "",
    giaTien: 0,
    mayGiat: false,
    banLa: false,
    tivi: false,
    dieuHoa: false,
    wifi: false,
    bep: false,
    doXe: false,
    hoBoi: false,
    banUi: false,
    maViTri: 0,
    hinhAnh: "",
  });

  const handleChange = (event) => {
    setRoomState({
      ...roomState,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeSwitch = (value, event) => {
    setRoomState({
      ...roomState,
      [event.target.offsetParent.name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const result = await adminRoomService.fetchAdminAddRoomApi(roomState);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Thêm phòng thành công !",
      });
      if (result.data.content) {
        navigate("/admin/phongthue");
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
        <h1>Thêm Phòng Thuê</h1>
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
        onSubmitCapture={handleSubmit}
      >
        <Form.Item label="Tên Phòng: ">
          <input
            onChange={handleChange}
            type="text"
            name="tenPhong"
            className="border text-sm rounded-md w-2/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Số Khách :">
          <input
            min={1}
            onChange={handleChange}
            type="number"
            name="khach"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Phòng Ngủ :">
          <input
            min={1}
            onChange={handleChange}
            type="number"
            name="phongNgu"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Số Giường :">
          <input
            min={1}
            onChange={handleChange}
            type="number"
            name="giuong"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Số Phòng Tắm :">
          <input
            min={1}
            onChange={handleChange}
            type="number"
            name="phongTam"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>

        <Form.Item label=" Mã Vị Trí :">
          <input
            max={10}
            min={0}
            onChange={handleChange}
            type="number"
            name="maViTri"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Mô Tả: ">
          <input
            onChange={handleChange}
            type="text"
            name="moTa"
            className="border text-sm rounded-md w-2/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Máy Giặt:" valuePropName="checked">
          <Switch name="mayGiat" className="adminSwitch" />
        </Form.Item>
        <Form.Item label="Bàn Là:" valuePropName="checked">
          <Switch
            onClick={handleChangeSwitch}
            name="banLa"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Tivi:" valuePropName="checked">
          <Switch
            onClick={handleChangeSwitch}
            name="tivi"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Điều Hòa:" valuePropName="checked">
          <Switch
            onClick={handleChangeSwitch}
            name="dieuHoa"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Wifi:" valuePropName="checked">
          <Switch
            onClick={handleChangeSwitch}
            name="wifi"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Bếp:" valuePropName="checked">
          <Switch
            onClick={handleChangeSwitch}
            name="bep"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Bãi Đỗ Xe:" valuePropName="checked">
          <Switch
            onClick={handleChangeSwitch}
            name="doXe"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Hồ Bơi:" valuePropName="checked">
          <Switch
            onClick={handleChangeSwitch}
            name="hoBoi"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Bàn Ủi:" valuePropName="checked">
          <Switch
            onClick={handleChangeSwitch}
            name="banUi"
            className="adminSwitch"
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
