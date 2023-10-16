import { requestApi } from "../configs/callApi";


class RoomService {
  fetchRoomByLocationApi = () => {
    return requestApi({
      url: "/vi-tri",
      method: "GET",
    })
  }


}
export const roomService = new RoomService();
