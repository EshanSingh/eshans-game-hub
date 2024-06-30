import { Box, Image, Link, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Box
          _hover={{
            transform: "scale(1.05)",
            transition: "transform .15s ease-in",
          }}
        >
          <Link href={file.image} isExternal>
            <Image key={file.id} src={file.image} />
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
