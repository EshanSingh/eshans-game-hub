import { Button } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const ResetButton = () => {
  const reset = useGameQueryStore((s) => s.reset);

  return <Button onClick={() => reset()}>Reset</Button>;
};

export default ResetButton;
