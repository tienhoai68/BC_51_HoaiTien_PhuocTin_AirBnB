import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { adminLocalService } from "../../services/AdminLocation";
import { useNavigate, useParams } from "react-router-dom";
import { createRef } from "react";

export default function AdminAddLocation() {
  const viTriRef = createRef();
  const tinhThanhRef = createRef();
  const quocGiaRef = createRef();
  const params = useParams();
  const navigate = useNavigate();
  const [imgLocation, setImgLocation] = useState("");
  const [imgFileUpload, setImgFileUpload] = useState(null);
  const [editLocation, setEditLocation] = useState({
    tenViTri: "",
    tinhThanh: "",
    quocGia: "",
    hinhAnh: {},
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
  const handleChangeImg = (event) => {
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setImgLocation(event.target.result);
    };
    setImgFileUpload(file);
  };
  const validateRequired = (value, ref, mes) => {
    if (value !== "") {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = mes;
    return false;
  };
  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    let isValid = true;

    isValid &= validateRequired(
      editLocation.tenViTri,
      viTriRef.current,
      "Tên vị trí không được để trống :)"
    );
    isValid &= validateRequired(
      editLocation.tinhThanh,
      tinhThanhRef.current,
      "Tên tỉnh thành trống !!!"
    );
    isValid &= validateRequired(
      editLocation.quocGia,
      quocGiaRef.current,
      "Tên quốc gia trống !!!"
    );
    if (isValid) {
      try {
        const result = await adminLocalService.fetchAdminEditLocationApi(
          params.locationId,
          editLocation
        );
        if (imgFileUpload !== null) {
          let formData = new FormData();
          formData.append("formFile", imgFileUpload, imgFileUpload.name);
          const resultUpload = await adminLocalService.fetchAdminImgLocationApi(
            params.locationId,
            formData
          );
        }
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
    }
  };
  return (
    <div className="container mx-auto py-5">
      <div className="md:block text-center text-3xl text-blue-800">
        <h1>Thêm Vị Trí</h1>
      </div>

      <form onSubmit={handleSubmitEdit}>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên vị trí :
          </label>
          <input
            onChange={handleChange}
            value={editLocation.tenViTri}
            type="text"
            name="tenViTri"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={viTriRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên tỉnh thành :
          </label>
          <input
            onChange={handleChange}
            value={editLocation.tinhThanh}
            type="text"
            name="tinhThanh"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={tinhThanhRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên quốc gia:
          </label>
          <input
            onChange={handleChange}
            value={editLocation.quocGia}
            type="text"
            name="quocGia"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={quocGiaRef}></span>
        </div>
        <div className="mb-2">
          <input
            name="hinhAnh"
            type="File"
            onChange={handleChangeImg}
            className="mb-2"
          />
          <br />
          <img
            style={{ width: 150, height: 150 }}
            src={imgLocation === "" ? editLocation.hinhAnh : imgLocation}
            alt="..."
          />
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
