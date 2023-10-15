import axios from "axios";

class AdminUsersService {
  fetchAdminUserApi() {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/users`,
      method: "GET",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
    });
  }
  fetchAdminAddUserApi(data) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/users`,
      method: "POST",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
      data,
    });
  }
  fetchAdminDetailApi(userId) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/users/${userId}`,
      method: "GET",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
    });
  }
  fetchAdminUpdateApi(userId, data) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/users/${userId}`,
      method: "PUT",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
      data,
    });
  }
}

// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3MDEiLCJlbWFpbCI6InRpbmFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsIm5iZiI6MTY5NzMzNDcyNywiZXhwIjoxNjk3OTM5NTI3fQ.OBCPMYlDD1g1bnhaGKH_1DiNv5_hn_VfFn8Q8OopRKc

export const adminUsersService = new AdminUsersService();
