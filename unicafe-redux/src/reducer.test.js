import counterReducer from "./reducer";
import deepFreeze from "deep-freeze";

describe("counterReducer", () => {
  const initialState = { good: 0, bad: 0, ok: 0 };

  test("returns initial state when state is undefined", () => {
    const newState = counterReducer(undefined, { type: "DO_NOTHING" });
    deepFreeze(newState);

    expect(newState).toEqual(initialState);
  });

  test("good is incremented", () => {
    const newState = counterReducer(initialState, { type: "GOOD" });
    deepFreeze(newState);

    expect(newState.good).toBe(initialState.good + 1);
  });

  test("bad is incremented", () => {
    const newState = counterReducer(initialState, { type: "BAD" });
    deepFreeze(newState);

    expect(newState.bad).toBe(initialState.bad + 1);
  });

  test("ok is incremented", () => {
    const newState = counterReducer(initialState, { type: "OK" });
    deepFreeze(newState);

    expect(newState.ok).toBe(initialState.ok + 1);
  });

  test("initial state is returned when action is zero", () => {
    const newState = counterReducer(initialState, { type: "ZERO" });
    deepFreeze(newState);

    expect(newState).toEqual(initialState);
  });
});
