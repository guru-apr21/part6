import axios from "axios";
const baseURL = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const { data } = await axios.get(baseURL);
  return data;
};

const createAnecdote = async (content) => {
  const newAnec = { content, votes: 0 };
  const { data } = await axios.post(baseURL, newAnec);
  return data;
};

const incrementVote = async (id) => {
  const res = await axios.get(`${baseURL}/${id}`);
  const anecdote = res.data;
  const { data } = await axios.put(`${baseURL}/${id}`, {
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  return data;
};

export default { getAll, createAnecdote, incrementVote };
