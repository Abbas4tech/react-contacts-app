import React from "react";
import { IContact } from "../Store/slices/contacts-slice";
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
      <div role="figure" className="flex rounded-md">
        <img src={contact.imageUrl} alt={contact.name} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{contact.name}</h2>
        <p>{contact.phone}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-info btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              setContactToEdit(contact);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-error btn-sm"
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
