import React, { useEffect } from "react";
import AnecdotesList from "./components/AnecdotesList";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "./redux/actions";
import anecdotesServices from "./services/anecdotes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdotesServices
      .getAll()
      .then((anecdotes) => dispatch(initializeAnecdotes(anecdotes)));
  });

  return (
    <div>
      <Notification />
      <Filter />
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
