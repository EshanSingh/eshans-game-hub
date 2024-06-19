import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}
// axios client
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2f430dcaaaa648019c08515f9e55f2a4",
  },
});

class APIclient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIclient;
