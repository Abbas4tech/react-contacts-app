import React from "react";
import { ContactType, IContact } from "../Store/slices/contacts-slice";
import { useNavigate } from "react-router-dom";

const ContactCard = ({
  contact,
  setContactToEdit,
  setContactIdToDelete,
}: {
  contact: IContact;
  setContactToEdit: (contact: IContact) => void;
  setContactIdToDelete: (id: number) => void;
}) => {
  const navigate = useNavigate();

  const openContactDetails = () => {
    navigate(`/contacts/details/${contact.id}`);
  };

  return (
    <div
      className="card card-side bg-base-100 shadow-xl cursor-pointer"
      onClick={openContactDetails}
    >
      <div role="figure" className="rounded-md flex max-w-[10rem]">
        <img loading="lazy" src={contact.imageUrl} alt={contact.name} />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold my-2 text-medium md:text-lg">
            {contact.name}
          </h2>
          <p className="my-2">Phone : {contact.phone}</p>
          <p>Address : {contact.address}</p>
          <p className="my-2">
            Status :{" "}
            <span
              className={`${
                contact.type === ContactType.HOME
                  ? "text-red-500"
                  : "text-blue-500"
              }`}
            >
              {contact.type}
            </span>
          </p>
        </div>
        <div className="card-actions gap-4 mt-2 justify-end">
          <button
            className="btn btn-info btn-sm md:btn-md"
            onClick={(e) => {
              e.stopPropagation();
              setContactToEdit(contact);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-error btn-sm md:btn-md"
            onClick={(e) => {
              e.stopPropagation();
              setContactIdToDelete(contact.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
