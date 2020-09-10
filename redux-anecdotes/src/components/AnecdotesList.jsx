import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementVote } from "../redux/actions";
import { setNotification } from "../redux/actions";

const AnecdotesList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    return state.anecdotes
      .filter((anec) => anec.content.includes(state.filter))
      .sort((a, b) => b.votes - a.votes);
  });

  return (
    <div>
      <h1>Anecdotes</h1>
      {anecdotes.map((anec) => (
        <div key={anec.id}>
          <div>{anec.content}</div>
          <div>
            has {anec.votes}
            <button
              onClick={() => {
                dispatch(incrementVote(anec.id));
                dispatch(setNotification(`you voted ${anec.content}`, 5));
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdotesList;
