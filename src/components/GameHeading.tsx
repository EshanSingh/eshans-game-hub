import { Heading } from "@chakra-ui/react";
import { GameSearch } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface GameHeadingProps {
  search: GameSearch;
}

const GameHeading = ({ search }: GameHeadingProps) => {
  const platform = usePlatform(search.platformId);
  const genre = useGenre(search.genreId);

  const heading = `${
    search.platformId || search.genreId || search.searchText
      ? "Searching for"
      : ""
  } ${search.searchText ? '"' + search.searchText + '"' + " in " : ""}
  ${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading fontSize="5xl" marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
