import axios from "axios";
const baseURL = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const { data } = await axios.get(baseURL);
  return data;
};

export default { getAll };
