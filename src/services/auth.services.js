import axios from "axios";

const todoApi = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});


export const login = (user) => todoApi.post("/login", user);
export const signup = (user) => todoApi.post("/signup", user);

