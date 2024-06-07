import { HStack, Image } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Logo />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
