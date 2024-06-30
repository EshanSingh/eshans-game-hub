import {
  Box,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import GameCard from "./GameCard";
import { Game } from "../entities/Game";

interface PopoverCardProps {
  game: Game;
}

const PopoverCard = ({ game }: PopoverCardProps) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box role="button" borderRadius={10}>
          <GameCard game={game} />
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader> {game.name} </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          ESRB Rating: {game.esrb_rating ? game.esrb_rating.name : "N/A"} <br />
          Tags:{" "}
          {game.tags.map((obj) =>
            obj.language == "eng" ? obj.name + ", " : ""
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCard;
