import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameSearch {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [search, setSearch] = useState<GameSearch>({} as GameSearch);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setSearch({ ...search, genre })}
            selectedGenre={search.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={search.platform}
            onSelectPlatform={(platform) => setSearch({ ...search, platform })}
          />
          <SortSelector
            sortOrder={search.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setSearch({ ...search, sortOrder })
            }
          />
        </HStack>
        <GameGrid search={search} />
      </GridItem>
    </Grid>
  );
}

export default App;
