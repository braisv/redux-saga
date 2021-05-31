import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://reqres.in/api/users",
  withCredentials: false,
});

export const getUsers = async () => {
  try {
    const response = await apiUrl.get("/");
    if (response && response.data) return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await apiUrl.delete(`/${id}`);
    console.log({ response });
    if (response && response.data) return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editUser = async (id) => {
  try {
    const response = await apiUrl.put(`/${id}`);
    console.log({ response });
    if (response && response.data) return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
