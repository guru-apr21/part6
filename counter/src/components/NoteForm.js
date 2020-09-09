import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const NoteForm = () => {
  const dispatch = useDispatch();

  const addNote = async (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = "";
    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note"></input>
      <button type="submit">add</button>
    </form>
  );
};

export default NoteForm;
