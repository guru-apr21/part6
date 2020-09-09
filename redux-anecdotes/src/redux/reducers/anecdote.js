import { VOTE, NEW_ANEC, INIT_ANECDOTES } from "../actionTypes";

//const getId = () => (100000 * Math.random()).toFixed(0);

const anecdotes = (state = [], action) => {
  switch (action.type) {
    case INIT_ANECDOTES:
      return action.payload;
    case VOTE: {
      const { id } = action.payload;
      const anecdoteToChange = state.find((anec) => anec.id === id);
      const changedAnec = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      const anecdotesAfterChange = state.map((anec) =>
        anec.id === id ? changedAnec : anec
      );
      return anecdotesAfterChange;
    }
    case NEW_ANEC: {
      const newAnec = action.payload;
      return [...state, newAnec];
    }
    default:
      return state;
  }
};

export default anecdotes;
