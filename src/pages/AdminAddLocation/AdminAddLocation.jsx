import React, { useState } from "react";
import Swal from "sweetalert2";
import { adminLocalService } from "../../services/AdminLocation";
import { useNavigate } from "react-router-dom";
import { createRef } from "react";

export default function AdminAddLocation() {
  const tenViTriRef = createRef();
  const tinhThanhRef = createRef();
  const quocGiaRef = createRef();
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
  const validateRequired = (value, ref, mes) => {
    if (value !== "") {
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
      addLocation.tenViTri,
      tenViTriRef.current,
      "Tên vị trí là bắt buộc!!!"
    );
    isValid &= validateRequired(
      addLocation.tinhThanh,
      tinhThanhRef.current,
      "Tên tỉnh thành là bắt buộc!!!"
    );
    isValid &= validateRequired(
      addLocation.quocGia,
      quocGiaRef.current,
      "Tên quốc gia là bắt buộc!!!"
    );
    if (isValid) {
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
    }
  };

  return (
    <div className="container mx-auto py-5">
      <div className="md:block text-center text-3xl text-blue-800">
        <h1>Thêm Vị Trí</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên Vị trí :
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="tenViTri"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={tenViTriRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên Tỉnh Thành :
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="tinhThanh"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={tinhThanhRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên Quốc Gia:
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="quocGia"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={quocGiaRef}></span>
        </div>
        <div className="mb-2">
          <button
            type="submit"
            className=" font-medium text-sm py-2.5 mr-2 mb-2 bg-blue-500 p-3 rounded-md"
          >
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
}
