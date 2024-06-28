import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 300;

  if (!children) return null;

  if (children.length <= maxChars) return <Text>{children}</Text>;

  const shortenedText = expanded
    ? children
    : children.substring(0, maxChars) + "...";
  return (
    <Text>
      {shortenedText + " "}
      <Button
        size="xs"
        fontWeight={"bold"}
        onClick={() => setExpanded(!expanded)}
        colorScheme="teal"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
