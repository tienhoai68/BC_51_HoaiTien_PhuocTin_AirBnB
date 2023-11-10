import { Form, Input, Switch } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminRoomService } from "../../services/AdminRoom";
import Swal from "sweetalert2";

export default function AdminEditRoom() {
  const navigate = useNavigate();
  const params = useParams();
  const [editRoomState, setEditRoomState] = useState({
    tenPhong: "",
    khach: 0,
    phongNgu: 0,
    giuong: 0,
    phongTam: 0,
    moTa: "",
    giaTien: 1,
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
    hinhAnh: null,
  });
  useEffect(() => {
    fetchAdminRoomDetailApi();
  }, []);
  const fetchAdminRoomDetailApi = async () => {
    const result = await adminRoomService.fetchAdminDetailRoomApi(
      params.roomId
    );
    setEditRoomState(result.data.content);
  };

  const handleChange = (event) => {
    setEditRoomState({
      ...editRoomState,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeSwitch = (value, event) => {
    setEditRoomState({
      ...editRoomState,
      [event.target.offsetParent.name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const result = await adminRoomService.fetchAdminEditRoomApi(
        params.roomId,
        editRoomState
      );
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Cập nhật Room thành công !",
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
        <h1>Cập Nhật Phòng Thuê</h1>
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
            value={editRoomState.tenPhong}
            onChange={handleChange}
            type="text"
            name="tenPhong"
            className="border text-sm rounded-md w-2/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Số Khách :">
          <input
            value={editRoomState.khach}
            min={1}
            onChange={handleChange}
            type="number"
            name="khach"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Phòng Ngủ :">
          <input
            value={editRoomState.phongNgu}
            min={1}
            onChange={handleChange}
            type="number"
            name="phongNgu"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Số Giường :">
          <input
            value={editRoomState.giuong}
            min={1}
            onChange={handleChange}
            type="number"
            name="giuong"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Số Phòng Tắm :">
          <input
            value={editRoomState.phongTam}
            min={1}
            onChange={handleChange}
            type="number"
            name="phongTam"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>

        <Form.Item label=" Mã Vị Trí :">
          <input
            value={editRoomState.maViTri}
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
            value={editRoomState.moTa}
            onChange={handleChange}
            type="text"
            name="moTa"
            className="border text-sm rounded-md w-2/3 p-2 "
          />
        </Form.Item>
        <Form.Item label=" Giá tiền :">
          <input
            value={editRoomState.giaTien}
            min={1}
            onChange={handleChange}
            type="number"
            name="giaTien"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </Form.Item>
        <Form.Item label="Máy Giặt:" valuePropName="checked">
          <Switch
            checked={editRoomState.mayGiat}
            onClick={handleChangeSwitch}
            name="mayGiat"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Bàn Là:" valuePropName="checked">
          <Switch
            checked={editRoomState.banLa}
            onClick={handleChangeSwitch}
            name="banLa"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Tivi:" valuePropName="checked">
          <Switch
            checked={editRoomState.tivi}
            onClick={handleChangeSwitch}
            name="tivi"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Điều Hòa:" valuePropName="checked">
          <Switch
            checked={editRoomState.dieuHoa}
            onClick={handleChangeSwitch}
            name="dieuHoa"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Wifi:" valuePropName="checked">
          <Switch
            checked={editRoomState.wifi}
            onClick={handleChangeSwitch}
            name="wifi"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Bếp:" valuePropName="checked">
          <Switch
            checked={editRoomState.bep}
            onClick={handleChangeSwitch}
            name="bep"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Bãi Đỗ Xe:" valuePropName="checked">
          <Switch
            checked={editRoomState.doXe}
            onClick={handleChangeSwitch}
            name="doXe"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Hồ Bơi:" valuePropName="checked">
          <Switch
            checked={editRoomState.hoBoi}
            onClick={handleChangeSwitch}
            name="hoBoi"
            className="adminSwitch"
          />
        </Form.Item>
        <Form.Item label="Bàn Ủi:" valuePropName="checked">
          <Switch
            checked={editRoomState.banUi}
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
