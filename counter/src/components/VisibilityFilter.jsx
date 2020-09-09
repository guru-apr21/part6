import React from "react";
import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const VisibilityFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        id="all"
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("ALL"))}
      ></input>
      <label htmlFor="all">all</label>
      <input
        id="important"
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("IMPORTANT"))}
      ></input>
      <label htmlFor="important">important</label>
      <input
        id="notImportant"
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("NOT IMPORTANT"))}
      ></input>
      <label htmlFor="notImportant">not important</label>
    </div>
  );
};

export default VisibilityFilter;
