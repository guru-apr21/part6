import { ANEC_MESSAGE, VOTE_MESSAGE, DELETE_MESSAGE } from "../actionTypes";

const notification = (state = "", action) => {
  switch (action.type) {
    case VOTE_MESSAGE:
      return action.payload;
    case DELETE_MESSAGE:
      return "";
    case ANEC_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default notification;
