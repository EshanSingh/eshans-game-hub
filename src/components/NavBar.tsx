import { AspectRatio, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo1.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Eshan" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
