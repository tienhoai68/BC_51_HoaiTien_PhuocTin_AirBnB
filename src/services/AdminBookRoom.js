import axios from "axios";

class AdminBookRoomService {
  fetchAdminBookRoomListApi() {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/dat-phong`,
      method: "GET",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
    });
  }
  fetchAdminDetailBookRoomListApi(id) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/dat-phong/${id}`,
      method: "GET",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
    });
  }
  fetchAdminEditBookRoomListApi(id, data) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/dat-phong/${id}`,
      method: "PUT",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
      data,
    });
  }
  fetchAdminDeleteBookRoomListApi(id) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/dat-phong/${id}`,
      method: "DELETE",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
    });
  }
  fetchAdminSearchBookRoomApi(value) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/dat-phong/lay-theo-nguoi-dung/${value}`,
      method: "GET",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
    });
  }
}

export const adminBookRoomService = new AdminBookRoomService();
