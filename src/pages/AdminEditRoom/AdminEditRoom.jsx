import { Form, Input, Switch } from "antd";
import React, { createRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminRoomService } from "../../services/AdminRoom";
import Swal from "sweetalert2";

export default function AdminEditRoom() {
  const tenPhongInputRef = createRef();
  const khachRef = createRef();
  const phongNguRef = createRef();
  const giuongRef = createRef();
  const phongTamRef = createRef();
  const giaTienRef = createRef();
  const maViTriRef = createRef();

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

  const validateRequired = (value, ref, mes) => {
    if (value !== "") {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = mes;
    return false;
  };

  const validateCheck = (value, ref, mes, letter) => {
    if (letter.test(value)) {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = mes;
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    isValid &= validateRequired(
      editRoomState.tenPhong,
      tenPhongInputRef.current,
      "Không để trống tên phòng"
    );
    isValid &=
      validateRequired(
        editRoomState.khach,
        khachRef.current,
        "Không để trống số khách"
      ) &&
      validateCheck(
        editRoomState.khach,
        khachRef.current,
        "số khách phải là số",
        /^[0-9]+$/
      );
    isValid &= validateRequired(
      editRoomState.phongNgu,
      phongNguRef.current,
      "Không để trống số phòng ngủ"
    );
    isValid &= validateRequired(
      editRoomState.phongTam,
      phongTamRef.current,
      "Không để trống số phòng tắm"
    );
    isValid &= validateRequired(
      editRoomState.giuong,
      giuongRef.current,
      "Không để trống số giường"
    );
    isValid &=
      validateRequired(
        editRoomState.giaTien,
        giaTienRef.current,
        "Không để trống"
      ) &&
      validateCheck(
        editRoomState.giaTien,
        giaTienRef.current,
        "Giá tiền phải là số",
        /^[0-9]+$/
      );
    isValid &= validateRequired(
      editRoomState.maViTri,
      maViTriRef.current,
      "Không để trống mã vị trí"
    );
    if (isValid) {
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
    }
  };

  return (
    <div className="container mx-auto py-5">
      <div className="md:block text-center text-3xl text-blue-800">
        <h1>Cập Nhật Phòng Thuê</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên Phòng :
          </label>
          <input
            value={editRoomState.tenPhong}
            onChange={handleChange}
            type="text"
            name="tenPhong"
            className="border text-sm rounded-md w-0.5/3 p-2 mb-2"
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={tenPhongInputRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Số khách :
          </label>
          <input
            value={editRoomState.khach}
            onChange={handleChange}
            min={1}
            type="number"
            name="khach"
            className="border text-sm rounded-md w-0.5/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={khachRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Phòng ngủ :
          </label>
          <input
            value={editRoomState.phongNgu}
            onChange={handleChange}
            min={1}
            type="number"
            name="phongNgu"
            className="border text-sm rounded-md  w-0.5/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={phongNguRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Giường :
          </label>
          <input
            value={editRoomState.giuong}
            onChange={handleChange}
            min={1}
            type="number"
            name="giuong"
            className="border text-sm rounded-md  w-0.5/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={giuongRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Phòng Tắm :
          </label>
          <input
            value={editRoomState.phongTam}
            onChange={handleChange}
            min={1}
            type="number"
            name="phongTam"
            className="border text-sm rounded-md  w-0.5/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={phongTamRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Mã vị trí :
          </label>
          <input
            value={editRoomState.maViTri}
            onChange={handleChange}
            min={0}
            type="number"
            name="maViTri"
            className="border text-sm rounded-md  w-0.5/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={maViTriRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Mô tả :</label>
          <input
            value={editRoomState.moTa}
            onChange={handleChange}
            type="text"
            name="moTa"
            className="border text-sm rounded-md  w-0.5/3 p-2 "
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Giá tiền :
          </label>
          <input
            value={editRoomState.giaTien}
            onChange={handleChange}
            min={1}
            type="number"
            name="giaTien"
            className="border text-sm rounded-md  w-0.5/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={giaTienRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Máy giặt :
          </label>
          <Switch
            checked={editRoomState.mayGiat}
            onClick={handleChangeSwitch}
            name="mayGiat"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Bàn là :
          </label>
          <Switch
            checked={editRoomState.banLa}
            onClick={handleChangeSwitch}
            name="banLa"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Tivi :</label>
          <Switch
            checked={editRoomState.tivi}
            onClick={handleChangeSwitch}
            name="tivi"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Điều hòa :
          </label>
          <Switch
            checked={editRoomState.dieuHoa}
            onClick={handleChangeSwitch}
            name="dieuHoa"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Wifi :</label>
          <Switch
            checked={editRoomState.wifi}
            onClick={handleChangeSwitch}
            name="wifi"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Bếp :</label>
          <Switch
            checked={editRoomState.bep}
            onClick={handleChangeSwitch}
            name="bep"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Bãi đõ xe :
          </label>
          <Switch
            checked={editRoomState.doXe}
            onClick={handleChangeSwitch}
            name="doXe"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Hồ bơi :
          </label>
          <Switch
            checked={editRoomState.hoBoi}
            onClick={handleChangeSwitch}
            name="hoBoi"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Bàn Ủi :
          </label>
          <Switch
            checked={editRoomState.banUi}
            onClick={handleChangeSwitch}
            name="banUi"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <button
            type="submit"
            className=" font-medium text-sm py-2.5 m-3 bg-blue-500 p-5 rounded-md"
          >
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
}
