import React from "react";
import Grid from "../components/Grid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { contactActions } from "../Store/slices/contacts-slice";

const ContactsScreen = () => {
  const ishavingContact =
    useSelector((state: RootState) => state.contactReducer.contact).length ===
    0;
  const dispatch = useDispatch();
  const clickhandler = () => {
    dispatch(contactActions.openDialog(true));
  };
  return (
    <>
      {ishavingContact && (
        <section className=" w-full h-[80vh] flex items-center justify-center">
          <button className="btn btn-accent p-4" onClick={clickhandler}>
            + Add New Contact
          </button>
        </section>
      )}
      <Grid />
    </>
  );
};

export default ContactsScreen;
