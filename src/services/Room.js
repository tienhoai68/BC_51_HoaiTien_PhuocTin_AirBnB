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
  fetchCommentRoomApi(id) {
    return requestApi({
      url: `/binh-luan/lay-binh-luan-theo-phong/${id}`,
      method: "GET",
    })
  };
  fetchRoomDetailApi(roomId) {
    return requestApi({
      url: `/phong-thue/${roomId}`,
      method: "GET",
    })
  };
  fetchRoomLocationDetailApi(roomId) {
    return requestApi({
      url: `/vi-tri/${roomId}`,
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
