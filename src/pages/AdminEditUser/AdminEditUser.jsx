import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminUsersService } from "../../services/AdminUser";
import dayjs from "dayjs";
import { DatePicker } from "antd";

export default function AdminEditUser() {
  const params = useParams();
  const navigate = useNavigate();
  const [userEditState, setUserEditState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: "",
    role: "",
  });

  useEffect(() => {
    fetchAdminDetailApi();
  }, []);

  const fetchAdminDetailApi = async () => {
    const result = await adminUsersService.fetchAdminDetailApi(params.userId);
    setUserEditState(result.data.content);
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await adminUsersService.fetchAdminUpdateApi(
      params.userId,
      userEditState
    );
    console.log(result.data.content);
    if (result.data.content) {
      navigate(`/admin/user`);
    }
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
            value={userEditState.name}
            type="text"
            name="name"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
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
