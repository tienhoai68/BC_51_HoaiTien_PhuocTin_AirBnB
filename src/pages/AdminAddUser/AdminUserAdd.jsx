import moment from "moment/moment";
import React, { useState } from "react";
import { adminUsersService } from "../../services/AdminUser";

export default function AdminAddUser() {
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
    const ngaySinh = moment(value).format("DD/MM/YYYY");
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await adminUsersService.fetchAdminAddUserApi(userState);
    console.log(result.data.content);
  };
  return (
    <div className="container mx-auto py-5">
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
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Email :</label>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Password :
          </label>
          <input
            onChange={handleChange}
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
            type="text"
            name="phone"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Birthday :
          </label>
          <input
            onChange={handleDate}
            type="date"
            name="birthday"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Birthday :
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
