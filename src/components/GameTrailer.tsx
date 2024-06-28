import useTrailers from "../hooks/useTrailers.ts";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first?.data["max"]} poster={first?.preview} controls />
  ) : null;
};

export default GameTrailer;
