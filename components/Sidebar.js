import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";
function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow Icon={UserIcon} Title={"Firends"} />
      <SidebarRow Icon={UserGroupIcon} Title={"Groups"} />
      <SidebarRow Icon={ShoppingBagIcon} Title={"Marketplace"} />
      <SidebarRow Icon={DesktopComputerIcon} Title={"Watch"} />
      <SidebarRow Icon={CalendarIcon} Title={"Events"} />
      <SidebarRow Icon={ClockIcon} Title={"memories"} />
      <SidebarRow Icon={ChevronDownIcon} Title={"See more"} />
    </div>
  );
}

export default Sidebar;
