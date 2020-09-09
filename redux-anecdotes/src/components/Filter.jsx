import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterInput } from "../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (e) => {
    dispatch(filterInput(e.target.value));
  };

  return (
    <form>
      filter{" "}
      <input
        value={filter}
        onChange={handleChange}
        style={{ marginTop: "5px" }}
      ></input>
    </form>
  );
};

export default Filter;
