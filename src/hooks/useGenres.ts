import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
import { Genre } from "./Genre";

const apiClient = new APIClient<Genre>("/games");

const useGenres = () => {
  //{ data: genres, isLoading: false, error: null }
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 1 day
    initialData: { count: genres.length, results: genres },
  });
};
export default useGenres;
