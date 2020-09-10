import React from "react";
import { useDispatch } from "react-redux";
import { createAnec } from "../redux/actions";
import { setNotification } from "../redux/actions";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnec = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";
    dispatch(createAnec(content));
    dispatch(setNotification(`you added ${content}`, 5));
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
