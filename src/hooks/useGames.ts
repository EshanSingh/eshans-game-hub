import APIClient, { FetchResponse } from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "../store";

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

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          metacritic: gameQuery.safeMode ? "30, 100" : "",
          page: pageParam,
        },
      }),
    staleTime: ms("24h"), // 1 day
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

// export
export default useGames;
