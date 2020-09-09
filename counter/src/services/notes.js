import axios from "axios";
const baseURL = "http://localhost:3001/notes";

const getAll = async () => {
  const { data } = await axios.get(baseURL);
  return data;
};

const createNew = async (content) => {
  const newNote = { content, important: false };
  const { data } = await axios.post(baseURL, newNote);
  return data;
};

export default { getAll, createNew };
