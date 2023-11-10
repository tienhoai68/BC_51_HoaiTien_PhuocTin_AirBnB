import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminUsersService } from "../../services/AdminUser";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import Swal from "sweetalert2";
import { createRef } from "react";

export default function AdminEditUser() {
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const phoneInputRef = createRef();
  const dateInputRef = createRef();
  const params = useParams();
  const navigate = useNavigate();
  const [imgUser, setImgUser] = useState("");
  const [userImgFile, setUserImgFile] = useState(null);
  const [userEditState, setUserEditState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: "",
    role: "",
    avatar: {},
  });

  useEffect(() => {
    fetchAdminDetailApi();
  }, []);

  const fetchAdminDetailApi = async () => {
    const result = await adminUsersService.fetchAdminDetailApi(params.userId);
    setUserEditState(result.data.content);
    if (result.data.content) {
      alert("CHÚ Ý: KHÔNG THỂ CẬP NHẬT HÌNH ẢNH CHO ACCOUNT KHÁC !!!");
    }
  };
  const handleChangeDate = (value) => {
    const ngaySinh = dayjs(value);
    setUserEditState({
      ...userEditState,
      birthday: ngaySinh,
    });
  };
  const handleChange = (event) => {
    setUserEditState({
      ...userEditState,
      [event.target.name]: event.target.value,
    });
  };
  const handChangeImgUser = (event) => {
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setImgUser(event.target.result);
    };
    setUserImgFile(file);
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
      userEditState.name,
      nameInputRef.current,
      "Chưa nhập tên !!!"
    );
    isValid &=
      validateRequired(
        userEditState.email,
        emailInputRef.current,
        "Chưa nhập Email !!!"
      ) &&
      validateCheck(
        userEditState.email,
        emailInputRef.current,
        "Định dạng email chưa đúng",
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
    isValid &=
      validateRequired(
        userEditState.phone,
        phoneInputRef.current,
        "Chưa nhập Số điện thoại !!!"
      ) &&
      validateCheck(
        userEditState.phone,
        phoneInputRef.current,
        "Nhập đúng số điện thoại !!!",
        /^[0-9]+$/
      );
    isValid &= validateRequired(
      userEditState.birthday,
      dateInputRef.current,
      "Chưa chọn ngày sinh !!!"
    );
    if (isValid) {
      try {
        const result = await adminUsersService.fetchAdminUpdateApi(
          params.userId,
          userEditState
        );
        if (userImgFile !== null) {
          let formData = new FormData();
          formData.append("formFile", userImgFile, userImgFile.name);
          const resultImgEdit = await adminUsersService.fetchAdminImgApi(
            formData
          );
        }
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Cập nhật User thành công !",
        });
        if (result.data.content) {
          navigate(`/admin/user`);
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
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <div className="md:block text-center text-3xl text-blue-800">
            <h1>Cập Nhật Tài Khoản</h1>
          </div>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên Người Dùng :
          </label>
          <input
            onChange={handleChange}
            value={userEditState.name}
            type="text"
            name="name"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={nameInputRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Email :</label>
          <input
            onChange={handleChange}
            value={userEditState.email}
            type="text"
            name="email"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={emailInputRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Password :
          </label>
          <input
            onChange={handleChange}
            value={userEditState.password}
            type="text"
            name="password"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Phone Number :
          </label>
          <input
            onChange={handleChange}
            value={userEditState.phone}
            type="text"
            name="phone"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={phoneInputRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Birthday :
          </label>
          <DatePicker
            name="birthday"
            format={"DD/MM/YYYY"}
            onChange={handleChangeDate}
            value={dayjs(userEditState.birthday, "DD/MM/YYYY")}
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={dateInputRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Gender :
          </label>
          <select
            onChange={handleChange}
            value={userEditState.gender}
            name="gender"
            className="border text-sm rounded-md w-1/3 p-2"
          >
            <option value={true}>MALE</option>
            <option value={false}>FEMALE</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            TYPE USER :
          </label>
          <select
            onChange={handleChange}
            value={userEditState.role}
            name="role"
            className="border text-sm rounded-md w-1/3 p-2"
          >
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            AVATAR :
          </label>
          <input name="avatar" type="File" onChange={handChangeImgUser} />
          <br />
          <img
            className="mt-3"
            style={{ width: 150, height: 150 }}
            src={imgUser === "" ? userEditState.avatar : imgUser}
            alt="..."
          />
        </div>

        <div className="col-span-2 mt-3 ">
          <button
            type="submit"
            className=" font-medium text-sm py-2.5 mr-2 mb-2 bg-blue-500 p-3 rounded-md"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
}
