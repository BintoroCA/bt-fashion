import axios from "axios";

const BASE_URL = "http://localhost:5005/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWFkNGRhZjU5NDc0NjhkNDdmMDA3MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDcwOTMxOSwiZXhwIjoxNjU0OTY4NTE5fQ.JNBrUMZudy91zVJsOj0E2JpX9uO5b0wZrHLLv9VIocQ";
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWFkNGRhZjU5NDc0NjhkNDdmMDA3MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDQ4OTkyMiwiZXhwIjoxNjU0NzQ5MTIyfQ.QYh3s0Al2xruHq6Lmz1QpF18z6tN1vKkPNXqVK06TdY";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
