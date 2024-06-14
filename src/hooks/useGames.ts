import useData from "./useData";
import { GameSearch } from "../App";

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
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  esrb_rating: { name: string };
  tags: [{ name: string; language: string }];
}

const useGames = (search: GameSearch) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: search.genre?.id,
        platforms: search.genre?.id,
        ordering: search.sortOrder,
        search: search.searchText,
        metacritic: search.safeMode ? "30, 100" : "",
      },
    },
    [search]
  );

// export
export default useGames;
