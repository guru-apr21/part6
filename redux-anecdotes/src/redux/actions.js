import {
  VOTE,
  NEW_ANEC,
  SET_MESSAGE,
  FILTER,
  INIT_ANECDOTES,
} from "./actionTypes";

import anecdoteServices from "../services/anecdotes";

export const incrementVote = (id) => {
  return async (dispatch) => {
    const data = await anecdoteServices.incrementVote(id);
    dispatch({ type: VOTE, payload: data });
  };
};

export const createAnec = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteServices.createAnecdote(content);
    dispatch({ type: NEW_ANEC, payload: anecdote });
  };
};

export const setNotification = (message, duration) => {
  return (dispatch) => {
    dispatch({ type: SET_MESSAGE, payload: message });
    setTimeout(
      () => dispatch({ type: SET_MESSAGE, payload: "" }),
      duration * 1000
    );
  };
};

export const filterInput = (input) => {
  return {
    type: FILTER,
    payload: input,
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const data = await anecdoteServices.getAll();
    dispatch({ type: INIT_ANECDOTES, payload: data });
  };
};
