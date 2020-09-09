import { combineReducers } from "redux";
import anecdotes from "./anecdote";
import notification from "./notification";
import filter from "./filter";

export default combineReducers({ anecdotes, notification, filter });
