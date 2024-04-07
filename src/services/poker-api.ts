import axios, { CanceledError} from "axios";

const POKER_SERVER_URL = 'http://localhost:8080';

export default axios.create({
  baseURL: POKER_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export {  CanceledError }