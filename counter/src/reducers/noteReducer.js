import noteService from "../services/notes";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      console.log(action.data);
      return [...state, action.data];
    case "INIT_NOTES":
      return action.data;
    case "TOGGLE_IMPORTANCE":
      const id = action.data.id;
      const changedNote = state.filter((note) => note.id === id)[0];
      const note = { ...changedNote, important: !changedNote.important };
      const notes = state.map((n) => (n.id === id ? note : n));
      return notes;
    default:
      return state;
  }
};

//const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const toggleImportanceOf = (id) => {
  return { type: "TOGGLE_IMPORTANCE", data: { id } };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const note = await noteService.createNew(content);
    dispatch({ type: "NEW_NOTE", data: note });
  };
};

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch({
      type: "INIT_NOTES",
      data: notes,
    });
  };
};

export default noteReducer;
