import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinitionItemsProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItems = ({ term, children }: DefinitionItemsProps) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize={"md"}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItems;
