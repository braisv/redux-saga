import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://reqres.in/api/users/",
  withCredentials: false,
});

export const getUsers = async (params) => {
  try {
    const response = await apiUrl.get("/", { params });
    if (response && response.status === 200) return response.data;
    if (response && response.status !== 200) {
      console.log("[Get Users Failed]", response);
      return response;
    }
  } catch (error) {
    console.error(error);
    if (error.response) {
      if (error.response.status === 404)
        throw new Error("Hmm, we can't find the info");
    } else {
      throw error;
    }
  }
};

export const getUserById = async (params, id) => {
  try {
    const response = await apiUrl.get("/", { params });
    if (response && response.data)
      if (response && response.status === 200) {
        const user = response.data?.data.find((user) => user.id === +id);
        if (user) {
          return user;
        } else {
          throw new Error("Hmm, we can't find the user");
        }
      }
    if (response && response.status !== 200) {
      console.log("[Get User Failed]", response);
      return response;
    }
  } catch (error) {
    console.error(error);
    if (error.response) {
      if (error.response.status === 404)
        throw new Error("Hmm, we can't find the user");
    } else {
      throw error;
    }
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await apiUrl.delete(`/${id}`);
    console.log({ deleteUserAPIres: response });
    if (response && response.data) return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editUser = async (id, user) => {
  try {
    const response = await apiUrl.put(`/${id}`, { ...user });
    console.log({ editUserAPIres: response });
    if (response && response.data) return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
