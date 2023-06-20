import axios from "axios";
import { getAuthToken } from "./";

const api = axios.create({
  baseURL: "http://localhost:3333/api/v1/",
});

export default api;

export async function makeRequest(method: 'get' | 'post' | 'put' | 'delete', path: string, data: any) {
  const token = getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  try {

    const response = await (data ? api[method](path, data, { headers }) : api[method](path, { headers }));
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}