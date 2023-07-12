import React from "react";
import {
  ContactType,
  IContact,
  contactActions,
} from "../Store/slices/contacts-slice";
import { Route } from "../routes/routes";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const createNewContact = () => {
    // const newContact: IContact = {
    //   id: Math.random(),
    //   name: "Abbas k abbu Tauqeer",
    //   address: "Ghr",
    //   imageUrl:
    //     "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
    //   phone: "8879998633",
    //   type: ContactType.HOME,
    // };

    dispatch(contactActions.openDialog(true));
  };
  return (
    <header className="h-20 px-2 flex items-center">
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <p className="btn btn-ghost normal-case text-xl">Contacts App</p>
        </div>
      </div>
      {pathname === Route.CONTACTS && (
        <button
          className="btn btn-active btn-accent"
          onClick={createNewContact}
        >
          New Contact
        </button>
      )}
    </header>
  );
};

export default NavBar;
