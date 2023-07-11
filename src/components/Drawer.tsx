import React from "react";
import NavBar from "./NavBar";
import SidebarItems from "./SidebarItems";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <NavBar />
        <div className="container mx-auto p-4">{children}</div>
      </div>
      <SidebarItems />
    </div>
  );
};

export default Drawer;
