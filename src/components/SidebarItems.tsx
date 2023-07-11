/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import routes, { Route } from "../routes/routes";
import { Link, useLocation } from "react-router-dom";

const SidebarItems = () => {
  const { pathname } = useLocation();

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-52 h-full bg-base-200 text-base-content">
        {routes
          .filter(
            (route) =>
              route.path !== Route.HOME &&
              route.path !== Route.CONTACTDETAILS &&
              route.path !== Route.PAGENOTFOUND
          )
          .map((route) => (
            <li
              key={route.path}
              className={
                pathname.includes(route.path) ? "bg-neutral rounded-md" : ""
              }
            >
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SidebarItems;
