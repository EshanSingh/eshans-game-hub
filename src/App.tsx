import { Box, Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import SafeModeToggle from "./components/SafeModeToggle";

export interface GameSearch {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  safeMode: boolean;
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
        <NavBar
          onSearch={(searchText) => setSearch({ ...search, searchText })}
        />
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
        <Box paddingLeft={2}>
          <GameHeading search={search} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={search.platform}
                onSelectPlatform={(platform) =>
                  setSearch({ ...search, platform })
                }
              />
            </Box>
            <SortSelector
              sortOrder={search.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setSearch({ ...search, sortOrder })
              }
            />
            <SafeModeToggle
              safeMode={search.safeMode}
              toggleSafeMode={() =>
                search.safeMode
                  ? setSearch({ ...search, safeMode: false })
                  : setSearch({ ...search, safeMode: true })
              }
            />
            <Box>
              <Button
                onClick={() =>
                  setSearch({
                    ...search,
                    genre: null,
                    platform: null,
                    sortOrder: "",
                    searchText: "",
                  })
                }
              >
                Reset
              </Button>
            </Box>
          </Flex>
        </Box>
        <GameGrid search={search} />
      </GridItem>
    </Grid>
  );
}

export default App;
