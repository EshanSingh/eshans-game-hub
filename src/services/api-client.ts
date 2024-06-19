import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
// axios client
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2f430dcaaaa648019c08515f9e55f2a4",
  },
});
