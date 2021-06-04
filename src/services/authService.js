import axios from "axios";

export const logIn = async (props, info) => {
  try {
    if (info.email && info.password) {
      const { email, password } = info;
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
        token: true,
      });
      if (response && response.data) {
        localStorage.setItem("token", response.data.token);
        props.history.push("/");
        return response;
      }
    } else {
      console.log("[Login Failure] Invalid parameters", { info });
    }
  } catch (error) {
    if (error.response) {
      const message = error.response?.data?.error;
      return {
        message,
        status: error.response?.status,
      };
    }
    throw error;
  }
};

export const logOut = (history) => {
  localStorage.removeItem("token");
  history.push("/");
  console.log("[Logout]");
};

export const isLogin = () => {
  if (localStorage.getItem("token")) return true;
  return false;
};
