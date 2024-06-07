import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../images/logo2.webp";
import logoDark from "../images/logo2dark.webp";

const Logo = () => {
  const { colorMode } = useColorMode();

  if (colorMode == "light") {
    return <Image src={logoDark} alt="Eshan" boxSize={"100px"} />;
  }
  return <Image src={logo} alt="Eshan" boxSize={"100px"} />;
};

export default Logo;
