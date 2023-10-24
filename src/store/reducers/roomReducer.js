import { SET_ROOM_INFO } from "../types/roomType";


const DEDAULT_STATE = {
  roomInfo: "",
};
const stringify = localStorage.getItem("ROOM_INFO");
// console.log(stringify);
if (stringify) {
  DEDAULT_STATE.roomInfo = JSON.parse(stringify);
}
// console.log(DEDAULT_STATE.userInfo);

export const roomReducer = (state = DEDAULT_STATE, action) => {

  switch (action.type) {
    case SET_ROOM_INFO: {
      state.roomInfo = action.payload;
      break;
    }
  }

  return { ...state };
}
