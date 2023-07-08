import React from "react";

const SidebarItems = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-52 h-full bg-base-200 text-base-content">
        <li>
          <a href="/q">Abbas Shaikh Dude</a>
        </li>
        <li>
          <a href="/a">Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarItems;
