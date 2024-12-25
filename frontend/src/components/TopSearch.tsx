import { useState } from "react";
import { SearchIcon } from "./ui/search";
import { Input } from "./ui/input";

function TopSearch() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex items-center h-10 px-2 py-0 bg-gray-200 rounded-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Input className="ring-0" />
      <SearchIcon animate={hovered} />
    </div>
  );
}

export default TopSearch;
