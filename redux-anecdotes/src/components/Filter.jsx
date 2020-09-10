import React from "react";
import { connect } from "react-redux";
import { filterInput } from "../redux/actions";

const Filter = (props) => {
  const handleChange = (e) => {
    props.filterInput(e.target.value);
  };

  return (
    <form>
      filter{" "}
      <input
        value={props.filter}
        onChange={handleChange}
        style={{ marginTop: "5px" }}
      ></input>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const connectedFilter = connect(mapStateToProps, { filterInput })(Filter);
export default connectedFilter;
