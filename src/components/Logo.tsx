import { Image, useColorMode } from "@chakra-ui/react";
import logo from "../images/logo2.webp";
import logoDark from "../images/logo2dark.webp";
import { Link } from "react-router-dom";

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <Link to={"/"}>
      <Image
        src={colorMode == "light" ? logoDark : logo}
        alt="Eshan"
        boxSize={"100px"}
        objectFit={"contain"}
      />
    </Link>
  );
};

export default Logo;
