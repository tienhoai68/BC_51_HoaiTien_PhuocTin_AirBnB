import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants/api";

import { store } from "../store/configRedux"

const userState = store.getState();

const requestApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    token: userState.userReducer.userInfo ? userState.userReducer.userInfo.token : "",
  }
})
// requestApi.interceptors.request.use((config) => {

//   let accessToken = null;

//   if (userState.userReducer.userInfo) {
//     accessToken = userState.userReducer.userInfo.token;
//     config.headers.Authorization = `Bearer ${accessToken}`
//   }
//   return config;
// })


export { requestApi };
