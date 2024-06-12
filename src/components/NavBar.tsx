import { HStack } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Logo />
      <SearchInput onSearch={onSearch} />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
