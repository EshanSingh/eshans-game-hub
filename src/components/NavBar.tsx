import { AspectRatio, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo2.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Eshan" boxSize={"100px"} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
