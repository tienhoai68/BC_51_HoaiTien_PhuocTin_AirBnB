import React, { useEffect, useState } from "react";
import { adminUsersService } from "../../services/AdminUser";

export default function AdminUser() {
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    fetchAdminUserApi();
  }, []);

  const fetchAdminUserApi = async () => {
    const result = await adminUsersService.fetchAdminUserApi();
    console.log(result.data.content);
    setUserState(result.data.content);
  };
  return (
    <div className="container">
      <div className="title-adminUser">
        <h1>User Admin</h1>
      </div>
    </div>
  );
}
