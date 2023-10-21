import { requestApi } from "../configs/callApi";


class UserService {
  loginApi = (data) => {
    return requestApi({
      url: "/auth/signin",
      method: "POST",
      data,
    })
  }
  registerApi(data) {
    return requestApi({
      url: "/auth/signup",
      method: "POST",
      data,
    })
  }
  userInfoApi(id) {
    return requestApi({
      url: `/users/${id}`,
      method: "GET",
    })
  }
  updateUserInfoApi(id, data) {
    return requestApi({
      url: `/users/${id}`,
      method: "PUT",
      data,
    })
  }

}
export const userService = new UserService();
