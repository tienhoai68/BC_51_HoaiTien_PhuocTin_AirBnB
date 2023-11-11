import React, { createRef, useState } from "react";
import { adminUsersService } from "../../services/AdminUser";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
  name: Yup.string().required("(*) Tên Người Dùng là bắt buộc"),
  email: Yup.string().email("(*) Email không hợp lệ").required("(*) Email là bắt buộc"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "(*) Số Điện Thoại không hợp lệ")
    .required("(*) Số Điện Thoại là bắt buộc"),
  password: Yup.string()
    .min(6, "(*) Mật khẩu phải có ít nhất 6 ký tự")
    .required("(*) Mật khẩu là bắt buộc"),
  birthday: Yup.date().required("(*) Ngày Sinh là bắt buộc"),
  gender: Yup.string().required("(*) Giới Tính là bắt buộc"),
});

export default function AdminAddUser() {
  const navigate = useNavigate();
  
  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "ADMIN",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const onSubmitRegister = async (values, { resetForm }) => {
    const formattedValues = {
      ...values,
      birthday: values.birthday ? dayjs(values.birthday).format("DD/MM/YYYY") : null,
    };
    try {
      const result = await adminUsersService.fetchAdminAddUserApi(formattedValues);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "thêm User thành công !",
      });
      resetForm();
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
  };

  // const handleChange = (event) => {
  //   setUserState({
  //     ...userState,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleDate = (value) => {
  //   const ngaySinh = dayjs(value).format("DD/MM/YYYY");
  //   setUserState({
  //     ...userState,
  //     birthday: ngaySinh,
  //   });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   let isValid = true;
  //   isValid &= validateRequired(
  //     userState.name,
  //     nameInputRef.current,
  //     "Chưa nhập tên !!!"
  //   );
  //   isValid &=
  //     validateRequired(
  //       userState.email,
  //       emailInputRef.current,
  //       "Chưa nhập Email !!!"
  //     ) &&
  //     validateCheck(
  //       userState.email,
  //       emailInputRef.current,
  //       "Định dạng email chưa đúng",
  //       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  //     );

  //   isValid &= validateRequired(
  //     userState.password,
  //     passwordInputRef.current,
  //     "Chưa nhập Password !!!"
  //   );
  //   isValid &=
  //     validateRequired(
  //       userState.phone,
  //       phoneInputRef.current,
  //       "Chưa nhập Số điện thoại !!!"
  //     ) &&
  //     validateCheck(
  //       userState.phone,
  //       phoneInputRef.current,
  //       "Nhập đúng số điện thoại !!!",
  //       /^[0-9]+$/
  //     );
  //   isValid &= validateRequired(
  //     userState.birthday,
  //     dateInputRef.current,
  //     "Chưa chọn ngày sinh !!!"
  //   );
  //   if (isValid) {
  //     try {
  //       const result = await adminUsersService.fetchAdminAddUserApi(userState);
  //       Swal.fire({
  //         icon: "success",
  //         title: "Success!",
  //         text: "thêm User thành công !",
  //       });
  //       if (result.data.content) {
  //         navigate(`/admin/user`);
  //       }
  //     } catch (error) {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: `${error.response.data.content}`,
  //       });
  //     }
  //   }
  // };
  return (

    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmitRegister}
  >
   <div className="container mx-auto py-5">
      <Form >
        <div className="mb-4 ">
          <div className="md:block text-center text-3xl text-blue-800">
            <h1>Đăng Ký Tài Khoản</h1>
          </div>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Tên Người Dùng :
          </label>
          <Field
            type="text"
            name="name"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
          <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">Email :</label>
          <Field
            type="text"
            name="email"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Password :
          </label>
          <Field
            type="password"
            name="password"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
           <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Phone Number :
          </label>
          <Field
            type="text"
            name="phone"
            className="border text-sm rounded-md w-1/3 p-2 "
          />
          <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Birthday :
          </label>
         <Field name="birthday">
            {({ field, form }) => (
              <DatePicker
                {...field}
                format="DD/MM/YYYY"
                className="border text-sm rounded-md w-1/3 p-2"
                onChange={(value) => form.setFieldValue("birthday", value)}
              />
            )}
          </Field>
          <ErrorMessage
              name="birthday"
              component="div"
              className="text-red-500"
            />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            Gender :
          </label>
          <Field
            as="select"
            name="gender"
            className="border text-sm rounded-md w-1/3 p-2"
          >
            <option value="true">MALE</option>
            <option value="false">FEMALE</option>
          </Field>
          <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500"
            />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium mr-3">
            TYPE USER :
          </label>
          <Field
            as="select"
            name="role"
            className="border text-sm rounded-md w-1/3 p-2"
          >
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </Field>
          <ErrorMessage
              name="role"
              component="div"
              className="text-red-500"
            />
        </div>

        <div className="col-span-2 mt-3 ">
          <button
            type='submit'
            className=" font-medium text-sm py-2.5 mr-2 mb-2 bg-blue-500 p-3 rounded-md"
          >
            Thêm
          </button>
        </div>
      </Form>
    </div>
  </Formik>

    // <div className="container mx-auto py-5 ml-5">
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-4 ">
    //       <div className="md:block text-center text-3xl text-blue-800">
    //         <h1>Đăng Ký Tài Khoản</h1>
    //       </div>
    //     </div>
    //     <div className="mb-2">
    //       <label className="block mb-2 text-sm font-medium mr-3">
    //         Tên Người Dùng :
    //       </label>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         name="name"
    //         className="border text-sm rounded-md w-1/3 p-2 "
    //       />
    //     </div>
    //     <div style={{ color: "red" }}>
    //       <span className="text-danger" ref={nameInputRef}></span>
    //     </div>
    //     <div className="mb-2">
    //       <label className="block mb-2 text-sm font-medium mr-3">Email :</label>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         name="email"
    //         className="border text-sm rounded-md w-1/3 p-2 "
    //       />
    //     </div>
    //     <div style={{ color: "red" }}>
    //       <span className="text-danger" ref={emailInputRef}></span>
    //     </div>
    //     <div className="mb-2">
    //       <label className="block mb-2 text-sm font-medium mr-3">
    //         Password :
    //       </label>
    //       <input
    //         onChange={handleChange}
    //         type="password"
    //         name="password"
    //         className="border text-sm rounded-md w-1/3 p-2 "
    //       />
    //     </div>
    //     <div style={{ color: "red" }}>
    //       <span className="text-danger" ref={passwordInputRef}></span>
    //     </div>
    //     <div className="mb-2">
    //       <label className="block mb-2 text-sm font-medium mr-3">
    //         Phone Number :
    //       </label>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         name="phone"
    //         className="border text-sm rounded-md w-1/3 p-2 "
    //       />
    //     </div>
    //     <div style={{ color: "red" }}>
    //       <span className="text-danger" ref={phoneInputRef}></span>
    //     </div>
    //     <div className="mb-2">
    //       <label className="block mb-2 text-sm font-medium mr-3">
    //         Birthday :
    //       </label>
    //       <DatePicker
    //         onChange={handleDate}
    //         format={"DD/MM/YYYY"}
    //         name="birthday"
    //         className="border text-sm rounded-md w-1/3 p-2 "
    //       />
    //     </div>
    //     <div style={{ color: "red" }}>
    //       <span className="text-danger" ref={dateInputRef}></span>
    //     </div>
    //     <div className="mb-2">
    //       <label className="block mb-2 text-sm font-medium mr-3">
    //         Gender :
    //       </label>
    //       <select
    //         onChange={handleChangeSelect}
    //         name="gender"
    //         className="border text-sm rounded-md w-1/3 p-2"
    //       >
    //         <option>MALE</option>
    //         <option>FEMALE</option>
    //       </select>
    //     </div>
    //     <div className="mb-2">
    //       <label className="block mb-2 text-sm font-medium mr-3">
    //         TYPE USER :
    //       </label>
    //       <select
    //         onChange={handleChange}
    //         name="role"
    //         className="border text-sm rounded-md w-1/3 p-2"
    //       >
    //         <option>ADMIN</option>
    //         <option>USER</option>
    //       </select>
    //     </div>

    //     <div className="col-span-2 mt-3 ">
    //       <button
    //         type="submit"
    //         className=" font-medium text-sm py-2.5 mr-2 mb-2 bg-blue-500 p-3 rounded-md"
    //       >
    //         Thêm
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}
