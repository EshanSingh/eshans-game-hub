import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

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
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}
