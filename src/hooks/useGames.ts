import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

// export
export default useGames;
