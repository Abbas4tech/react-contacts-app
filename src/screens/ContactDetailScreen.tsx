import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { IContact } from "../Store/slices/contacts-slice";
import { useSelector } from "react-redux";
import { RootState } from "../Store";

const ContactDetailScreen = () => {
  const { contactId } = useParams();
  const id = typeof contactId === "string" ? contactId : "";
  const contact = useSelector(
    (state: RootState) => state.contactReducer.contact
  ).find((e) => e.id === +id);
  const navigate = useNavigate();

  const [detailedContact, setDetailedContact] = useState<IContact | null>(null);
  useEffect(() => {
    if (contact) {
      setDetailedContact(contact);
    } else {
      setDetailedContact(null);
      navigate("-1");
    }
  }, []);

  return (
    <>
      <section className="w-full">
        <article className=" flex flex-col md:flex-row gap-6 items-center justify-center mx-auto max-w-3xl">
          <figure>
            <img src={detailedContact?.imageUrl} alt="user-logo" />
          </figure>
          <article className="flex flex-col justify-end gap-3">
            <h2 className="text-3xl text-center md:text-start lg:text-4xl xl:text-5xl font-bold">
              {detailedContact?.name}
            </h2>
            <p className=" text-lg text-center md:text-start md:text-xl font-semibold">
              Phone : {detailedContact?.phone}
            </p>
            <p className=" text- text-center md:text-start md:text-xl font-semibold">
              Type : {detailedContact?.type}
            </p>
            <p className=" text-lg text-center md:text-start md:text-xl font-semibold">
              Address: {detailedContact?.address}
            </p>
          </article>
        </article>
      </section>
    </>
  );
};

export default ContactDetailScreen;
