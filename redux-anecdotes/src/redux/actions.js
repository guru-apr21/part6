import {
  VOTE,
  NEW_ANEC,
  ANEC_MESSAGE,
  DELETE_MESSAGE,
  VOTE_MESSAGE,
  FILTER,
} from "./actionTypes";

export const incrementVote = (id) => {
  return {
    type: VOTE,
    payload: { id },
  };
};

export const createAnec = (content) => {
  const getId = () => (100000 * Math.random()).toFixed(0);

  return {
    type: NEW_ANEC,
    payload: { content, votes: 0, id: getId() },
  };
};

export const voteMessage = (content) => {
  return {
    type: VOTE_MESSAGE,
    payload: `you voted '${content}'`,
  };
};

export const anecMessage = (content) => {
  return {
    type: ANEC_MESSAGE,
    payload: `you added '${content}'`,
  };
};

export const deleteMessage = () => {
  return {
    type: DELETE_MESSAGE,
  };
};

export const filterInput = (input) => {
  return {
    type: FILTER,
    payload: input,
  };
};
