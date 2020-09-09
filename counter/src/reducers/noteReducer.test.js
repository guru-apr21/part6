import noteReducer from "./noteReducer";
import deepFreeze from "deep-freeze";

describe("note reducer", () => {
  test("returns new state with action NEW_NOTE", () => {
    const state = [];
    const action = {
      type: "NEW_NOTE",
      data: {
        content: "the app state is in the redux store",
        important: false,
        id: 1,
      },
    };

    deepFreeze(state);
    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState).toContainEqual(action.data);
  });

  test("returns the new state with action toggle importance", () => {
    const state = [
      {
        content: "Redux is used for state management",
        important: true,
        id: 1,
      },
      {
        content: "the app state is in the reduc store",
        important: true,
        id: 2,
      },
    ];

    const action = {
      type: "TOGGLE_IMPORTANCE",
      data: { id: 2 },
    };

    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(2);

    expect(newState).toContainEqual(state[0]);

    expect(newState).toContainEqual({
      content: "the app state is in the reduc store",
      important: false,
      id: 2,
    });
  });
});
