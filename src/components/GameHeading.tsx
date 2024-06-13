import { Heading } from "@chakra-ui/react";
import { GameSearch } from "../App";

interface GameHeadingProps {
  search: GameSearch;
}

const GameHeading = ({ search }: GameHeadingProps) => {
  const heading = `${search.platform?.name || ""} ${
    search.genre?.name || ""
  } Games`;

  return (
    <Heading fontSize="5xl" marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
