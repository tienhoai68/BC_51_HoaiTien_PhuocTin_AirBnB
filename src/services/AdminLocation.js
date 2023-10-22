import axios from "axios";

class AdminLocationService {
  fetchAdminLocationApi() {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri`,
      method: "GET",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
    });
  }
  fetchAdminAddLocationApi(data) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri`,
      method: "POST",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4ODMiLCJlbWFpbCI6Inp4emN4ekBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTc1OTM4OTQsImV4cCI6MTY5ODE5ODY5NH0.dq9xdj71fPQcBgsgFuG9Y8MP_p4uoND0b-mJbTl4SLo",
      },
      data,
    });
  }
  fetchAdminDetailLocationApi(id) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/${id}`,
      method: "GET",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
      },
    });
  }

  fetchAdminDeleteLocationApi(id) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/${id}`,
      method: "DELETE",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4ODMiLCJlbWFpbCI6Inp4emN4ekBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTc1OTM4OTQsImV4cCI6MTY5ODE5ODY5NH0.dq9xdj71fPQcBgsgFuG9Y8MP_p4uoND0b-mJbTl4SLo",
      },
    });
  }
  fetchAdminEditLocationApi(id, data) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/${id}`,
      method: "PUT",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4ODMiLCJlbWFpbCI6Inp4emN4ekBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTc1OTM4OTQsImV4cCI6MTY5ODE5ODY5NH0.dq9xdj71fPQcBgsgFuG9Y8MP_p4uoND0b-mJbTl4SLo",
      },
      data,
    });
  }
  fetchAdminImgLocationApi(id, data) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/upload-hinh-vitri?maViTri=${id}`,
      method: "POST",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTg1NjAwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzEwMDAzNjAwfQ.SWV-oXLgyWKt3LK_5cUNjLzDMJ3vka3jrLF73mhH7I8",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4ODMiLCJlbWFpbCI6Inp4emN4ekBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTc1OTM4OTQsImV4cCI6MTY5ODE5ODY5NH0.dq9xdj71fPQcBgsgFuG9Y8MP_p4uoND0b-mJbTl4SLo",
      },
      data,
    });
  }
}

export const adminLocalService = new AdminLocationService();
