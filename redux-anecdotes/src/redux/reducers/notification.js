import { SET_MESSAGE } from "../actionTypes";

const notification = (state = "", action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default notification;
