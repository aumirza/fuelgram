import { UserIcon } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { BellIcon } from "./ui/bell";
import TopSearch from "./TopSearch";

function Header() {
  return (
    <div className="flex justify-between w-full p-2 bg-white">
      <div className="flex items-center justify-center bg-gray-200 rounded-full size-10">
        <SidebarTrigger />
      </div>
      <div className="flex gap-2">
        <TopSearch />

        <div className="flex items-center justify-center bg-gray-300 rounded-full size-10">
          <BellIcon />
        </div>

        <div className="flex items-center justify-end w-10 overflow-hidden transition-all duration-300 ease-in-out bg-gray-200 rounded-full group hover:w-32">
          <span className="mr-2 transition-opacity duration-500 opacity-0 whitespace-nowrap group-hover:opacity-100">
            User
          </span>
          <div className="flex items-center justify-center flex-shrink-0 bg-gray-400 rounded-full size-10">
            <UserIcon className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
