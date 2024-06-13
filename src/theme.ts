import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#d8fdff",
      100: "#acf1ff",
      200: "#7ee7fc",
      300: "#4edcf9",
      400: "#22d2f6",
      500: "#09b8dd",
      600: "#008fad",
      700: "#00667d",
      800: "#003e4d",
      900: "#00161f",
    },
  },
});

export default theme;
