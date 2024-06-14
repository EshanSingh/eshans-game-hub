import { HStack, Switch, Text, Tooltip } from "@chakra-ui/react";

interface SafeModeToggleProps {
  toggleSafeMode: () => void;
  safeMode?: boolean;
}

const SafeModeToggle = ({ safeMode, toggleSafeMode }: SafeModeToggleProps) => {
  return (
    <HStack paddingLeft={3}>
      <Switch
        colorScheme="green"
        isChecked={safeMode == true}
        onChange={toggleSafeMode}
      />
      <Tooltip label="Only displays metacritic rated games when enabled (recommended)">
        <Text whiteSpace="nowrap"> Reviewed Only </Text>
      </Tooltip>
    </HStack>
  );
};

export default SafeModeToggle;
