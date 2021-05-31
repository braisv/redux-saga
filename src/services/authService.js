import axios from "axios";

export const logIn = async (props, info) => {
  try {
    if (info.email && info.password) {
      const { email, password } = info;
      const response = axios.post("https://reqres.in/api/login", {
        email,
        password,
        token: true,
      });
      if (response && response.data) {
        console.log({ response });
        localStorage.setItem("token", response.data.token);
        props.history.push("/home");
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logOut = (history) => {
  localStorage.removeItem("token");
  history.push("/home");
};

export const isLogin = () => {
  if (localStorage.getItem("token")) return true;
  return false;
};
