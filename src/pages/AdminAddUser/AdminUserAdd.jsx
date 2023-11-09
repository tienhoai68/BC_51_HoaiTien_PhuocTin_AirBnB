import React, { useState } from "react";
import moment from "moment/moment";
import React, { createRef, useState } from "react";
import { adminUsersService } from "../../services/AdminUser";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function AdminAddUser() {
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const phoneInputRef = createRef();
  const dateInputRef = createRef();
  const navigate = useNavigate();
  const [userState, setUserState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "ADMIN",
  });

  const handleChange = (event) => {
    setUserState({
      ...userState,
      [event.target.name]: event.target.value,
    });
  };
  const handleDate = (value) => {
    const ngaySinh = dayjs(value).format("DD/MM/YYYY");
    setUserState({
      ...userState,
      birthday: ngaySinh,
    });
  };

  const handleChangeSelect = (event) => {
    if (event.target.value === "MALE") {
      setUserState({
        ...userState,
        gender: true,
      });
    } else {
      setUserState({
        ...userState,
        gender: false,
      });
    }
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
      userState.name,
      nameInputRef.current,
      "Chưa nhập tên !!!"
    );
    isValid &=
      validateRequired(
        userState.email,
        emailInputRef.current,
        "Chưa nhập Email !!!"
      ) &&
      validateCheck(
        userState.email,
        emailInputRef.current,
        "Định dạng email chưa đúng",
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );

    isValid &= validateRequired(
      userState.password,
      passwordInputRef.current,
      "Chưa nhập Password !!!"
    );
    isValid &=
      validateRequired(
        userState.phone,
        phoneInputRef.current,
        "Chưa nhập Số điện thoại !!!"
      ) &&
      validateCheck(
        userState.phone,
        phoneInputRef.current,
        "Nhập đúng số điện thoại !!!",
        /^[0-9]+$/
      );
    isValid &= validateRequired(
      userState.birthday,
      dateInputRef.current,
      "Chưa chọn ngày sinh !!!"
    );
    if (isValid) {
      try {
        const result = await adminUsersService.fetchAdminAddUserApi(userState);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "thêm User thành công !",
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
    <div className="container mx-auto py-5 ml-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <div className="md:block text-center text-3xl text-blue-800">
            <h1>Đăng Ký Tài Khoản</h1>
          </div>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên Người Dùng :
          </label>
          <input
            onChange={handleChange}
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
            type="password"
            name="password"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div style={{ color: "red" }}>
          <span className="text-danger" ref={passwordInputRef}></span>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Phone Number :
          </label>
          <input
            onChange={handleChange}
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
            onChange={handleDate}
            format={"DD/MM/YYYY"}
            name="birthday"
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
            onChange={handleChangeSelect}
            name="gender"
            className="border text-sm rounded-md w-1/3 p-2"
          >
            <option>MALE</option>
            <option>FEMALE</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            TYPE USER :
          </label>
          <select
            onChange={handleChange}
            name="role"
            className="border text-sm rounded-md w-1/3 p-2"
          >
            <option>ADMIN</option>
            <option>USER</option>
          </select>
        </div>

        <div className="col-span-2 mt-3 ">
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
