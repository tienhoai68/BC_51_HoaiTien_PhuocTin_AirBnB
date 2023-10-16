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

}
export const userService = new UserService();