import { requestApi } from "../configs/callApi";

class RoomService {
  fetchRoomByLocationApi = () => {
    return requestApi({
      url: "/vi-tri",
      method: "GET",
    })
  };
  fetchRoomApi() {
    return requestApi({
      url: `/phong-thue`,
      method: "GET",
    })
  };
  fetchRoomByCityApi(cityId) {
    return requestApi({
      url: `/phong-thue/lay-phong-theo-vi-tri?maViTri=${cityId}`,
      method: "GET",
    })
  };



}
export const roomService = new RoomService();
