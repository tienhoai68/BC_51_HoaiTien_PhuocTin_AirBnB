import React, { createRef, useState } from "react";
import { Switch } from "antd";
import "./AdminAddRoom.scss";
import { adminRoomService } from "../../services/AdminRoom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AdminAddRoom() {
  const tenPhongInputRef = createRef();
  const khachRef = createRef();
  const phongNguRef = createRef();
  const giuongRef = createRef();
  const phongTamRef = createRef();
  const giaTienRef = createRef();
  const maViTriRef = createRef();
  const navigate = useNavigate();

  const [roomState, setRoomState] = useState({
    tenPhong: "",
    khach: "",
    phongNgu: "",
    giuong: "",
    phongTam: "",
    moTa: "",
    giaTien: "",
    mayGiat: false,
    banLa: false,
    tivi: false,
    dieuHoa: false,
    wifi: false,
    bep: false,
    doXe: false,
    hoBoi: false,
    banUi: false,
    maViTri: "",
    hinhAnh: "",
  });
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    isValid &= validateRequired(
      roomState.tenPhong,
      tenPhongInputRef.current,
      "Không để trống tên phòng"
    );
    isValid &=
      validateRequired(
        roomState.khach,
        khachRef.current,
        "Không để trống số khách"
      ) &&
      validateCheck(
        roomState.khach,
        khachRef.current,
        "số khách phải là số",
        /^[0-9]+$/
      );
    isValid &= validateRequired(
      roomState.phongNgu,
      phongNguRef.current,
      "Không để trống số phòng ngủ"
    );
    isValid &= validateRequired(
      roomState.phongTam,
      phongTamRef.current,
      "Không để trống số phòng tắm"
    );
    isValid &= validateRequired(
      roomState.giuong,
      giuongRef.current,
      "Không để trống số giường"
    );
    isValid &=
      validateRequired(
        roomState.giaTien,
        giaTienRef.current,
        "Không để trống"
      ) &&
      validateCheck(
        roomState.giaTien,
        giaTienRef.current,
        "Giá tiền phải là số",
        /^[0-9]+$/
      );
    isValid &= validateRequired(
      roomState.maViTri,
      maViTriRef.current,
      "Không để trống mã vị trí"
    );
    if (isValid) {
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
    }
  };
  return (
    <div className="container mx-auto py-5 ">
      <div className="md:block text-center text-3xl text-blue-800">
        <h1>Thêm Phòng Thuê</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên Phòng :
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="tenPhong"
            className="border text-sm rounded-md w-1/3 p-2 mb-2"
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
            onClick={handleChangeSwitch}
            name="banLa"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Tivi :</label>
          <Switch
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
            onClick={handleChangeSwitch}
            name="dieuHoa"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Wifi :</label>
          <Switch
            onClick={handleChangeSwitch}
            name="wifi"
            className="adminSwitch"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Bếp :</label>
          <Switch
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
