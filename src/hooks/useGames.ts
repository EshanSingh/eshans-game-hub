import APIClient, { FetchResponse } from "../services/api-client";
import { GameSearch } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

// Platform info
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

const apiClient = new APIClient<Game>("/games");

const useGames = (search: GameSearch) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", search],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: search.genre?.id,
          parent_platforms: search.platform?.id,
          ordering: search.sortOrder,
          search: search.searchText,
          metacritic: search.safeMode ? "30, 100" : "",
          page: pageParam,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 1 day
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

// export
export default useGames;
