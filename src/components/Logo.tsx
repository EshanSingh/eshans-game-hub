import { Image, useColorMode } from "@chakra-ui/react";
import logo from "../images/logo2.webp";
import logoDark from "../images/logo2dark.webp";

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode == "light" ? logoDark : logo}
      alt="Eshan"
      boxSize={"100px"}
    />
  );
};

export default Logo;
