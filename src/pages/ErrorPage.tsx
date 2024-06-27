import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const isInvalidRoute = isRouteErrorResponse(error);

  return (
    <>
      <NavBar />
      <Box padding={10}>
        <Heading paddingBottom={5}>Oops...</Heading>
        <Text>
          {isInvalidRoute
            ? "This page does not exist"
            : "Sorry, an unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
