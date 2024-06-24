import { create } from "zustand";

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSafeMode: (safeMode: boolean) => void;
  reset: () => void;
}

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  safeMode: boolean;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: { safeMode: false },
  setSearchText: (searchText) =>
    set((store) => ({
      gameQuery: { searchText, safeMode: store.gameQuery.safeMode },
    })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSafeMode: (safeMode) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, safeMode } })),
  reset: () =>
    set((store) => ({ gameQuery: { safeMode: store.gameQuery.safeMode } })),
}));

export default useGameQueryStore;
