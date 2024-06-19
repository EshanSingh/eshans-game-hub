import { FetchResponse } from "../services/api-client";
import { GameSearch } from "../App";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

// Platform info
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Game info
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  esrb_rating: { name: string };
  tags: [{ name: string; language: string }];
}

const useGames = (search: GameSearch) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", search],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: search.genre?.id,
            parent_platforms: search.platform?.id,
            ordering: search.sortOrder,
            search: search.searchText,
            metacritic: search.safeMode ? "30, 100" : "",
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 1 day
  });
};

// export
export default useGames;
