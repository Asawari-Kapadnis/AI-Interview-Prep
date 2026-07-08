import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function register({ username, email, passward }) {
  const response = await axios.post(
    `${API_URL}/api/auth/register`,
    { username, email, passward },
    { withCredentials: true }
  );

  return response.data;
}

export async function login({ email, passward }) {
  const response = await axios.post(
    `${API_URL}/api/auth/login`,
    { email, passward },
    { withCredentials: true }
  );

  return response.data;
}

export async function logout() {
  const response = await axios.get(
    `${API_URL}/api/auth/logout`,
    { withCredentials: true }
  );

  return response.data;
}

export async function getme() {
  const response = await axios.get(
    `${API_URL}/api/auth/getme`,
    { withCredentials: true }
  );

  return response.data;
}