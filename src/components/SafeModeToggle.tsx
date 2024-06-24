import { HStack, Switch, Text, Tooltip } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const SafeModeToggle = () => {
  const safeMode = useGameQueryStore((s) => s.gameQuery.safeMode);
  const setSafeMode = useGameQueryStore((s) => s.setSafeMode);

  return (
    <HStack paddingLeft={3}>
      <Switch
        colorScheme="green"
        isChecked={safeMode == true}
        onChange={() => setSafeMode(!safeMode)}
      />
      <Tooltip label="Only displays metacritic rated games when enabled (recommended)">
        <Text whiteSpace="nowrap"> Reviewed Only </Text>
      </Tooltip>
    </HStack>
  );
};

export default SafeModeToggle;
