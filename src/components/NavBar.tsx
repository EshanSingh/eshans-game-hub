import { HStack } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Logo />
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
