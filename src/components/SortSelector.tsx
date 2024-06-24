import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { val: "", label: "Relevance" },
    { val: "-added", label: "Date Added" },
    { val: "name", label: "Name" },
    { val: "-released", label: "Release Date" },
    { val: "-metacritic", label: "Popularity" },
    { val: "-rating", label: "Rating" },
  ];

  const currentSortOrder = sortOrders.find((order) => order.val == sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => setSortOrder(order.val)} key={order.val}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
