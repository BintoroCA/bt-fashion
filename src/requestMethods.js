import axios from "axios";

const BASE_URL = "http://localhost:5005/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWFkNGRhZjU5NDc0NjhkNDdmMDA3MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDQ4OTkyMiwiZXhwIjoxNjU0NzQ5MTIyfQ.QYh3s0Al2xruHq6Lmz1QpF18z6tN1vKkPNXqVK06TdY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
