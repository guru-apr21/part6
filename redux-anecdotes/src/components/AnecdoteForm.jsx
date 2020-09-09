import React from "react";
import { useDispatch } from "react-redux";
import { createAnec } from "../redux/actions";
import { anecMessage, deleteMessage } from "../redux/actions";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnec = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";
    dispatch(createAnec(content));
    dispatch(anecMessage(content));
    setTimeout(() => dispatch(deleteMessage()), 5000);
  };

  return (
    <div>
      <h1>Create new</h1>
      <form onSubmit={addAnec}>
        <input name="anecdote"></input>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
