const initialState = [
  {
    content: "reducer defines how redux store works",
    important: true,
    id: 1,
  },
  {
    content: "state of store can contain any data",
    important: false,
    id: 2,
  },
];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.data];
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

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const toggleImportanceOf = (id) => {
  return { type: "TOGGLE_IMPORTANCE", data: { id } };
};

export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    data: { id: generateId(), content, important: false },
  };
};

export default noteReducer;