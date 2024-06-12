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
      },
    },
    [search]
  );

// export
export default useGames;
