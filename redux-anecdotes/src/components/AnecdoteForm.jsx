import React from "react";
import { connect } from "react-redux";
import { createAnec } from "../redux/actions";
import { setNotification } from "../redux/actions";

const AnecdoteForm = (props) => {
  const addAnec = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";
    props.createAnec(content);
    props.setNotification(`you added ${content}`, 5);
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

const connectedAnecdoteForm = connect(null, { createAnec, setNotification })(
  AnecdoteForm
);
export default connectedAnecdoteForm;
