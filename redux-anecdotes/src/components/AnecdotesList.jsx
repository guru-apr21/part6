import React from "react";
import { connect } from "react-redux";
import { incrementVote, setNotification } from "../redux/actions";

const AnecdotesList = (props) => {
  return (
    <div>
      <h1>Anecdotes</h1>
      {props.anecdotes.map((anec) => (
        <div key={anec.id}>
          <div>{anec.content}</div>
          <div>
            has {anec.votes}
            <button
              onClick={() => {
                props.incrementVote(anec.id);
                props.setNotification(`you voted ${anec.content}`, 5);
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    anecdotes: state.anecdotes
      .filter((anec) => anec.content.includes(state.filter))
      .sort((a, b) => b.votes - a.votes),
  };
};

const mapDispatchToProps = {
  incrementVote,
  setNotification,
};

const connectedAnecdotesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdotesList);
export default connectedAnecdotesList;
