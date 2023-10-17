import axios from "axios";

class AdminRoomService {
  fetchAdminRoomApi() {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/phong-thue`,
      method: "GET",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
    });
  }
}

export const adminRoomService = new AdminRoomService();
