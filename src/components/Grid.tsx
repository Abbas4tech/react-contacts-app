import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import {
  ContactType,
  IContact,
  contactActions,
} from "../Store/slices/contacts-slice";
import Dialog from "./Dialog";

const Grid = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState<IContact | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState<number | null>();

  const dispatch = useDispatch();

  const contacts = useSelector(
    (state: RootState) => state.contactReducer.contact
  );

  useEffect(() => {
    if (contactToEdit) {
      setIsEditDialogOpen(true);
    } else {
      setIsEditDialogOpen(false);
    }
  }, [contactToEdit]);

  useEffect(() => {
    if (contactIdToDelete) {
      setIsDeleteDialogOpen(true);
    } else {
      setIsDeleteDialogOpen(false);
    }
  }, [contactIdToDelete]);

  const closeDialog = () => {
    setContactToEdit(null);
  };

  const form = (
    <span>
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered w-full max-w-xs"
        value={contactToEdit?.name}
        onChange={(e) => {
          setContactToEdit(
            (prevState) => ({ ...prevState, name: e.target.value } as IContact)
          );
        }}
      />
      <input
        type="text"
        placeholder="Contact"
        className="input input-bordered w-full max-w-xs"
        value={contactToEdit?.phone}
        onChange={(e) => {
          setContactToEdit(
            (prevState) => ({ ...prevState, phone: e.target.value } as IContact)
          );
        }}
      />
      <input
        type="text"
        placeholder="Address"
        className="input input-bordered w-full max-w-xs"
        value={contactToEdit?.address}
        onChange={(e) => {
          setContactToEdit(
            (prevState) =>
              ({ ...prevState, address: e.target.value } as IContact)
          );
        }}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="input input-bordered w-full max-w-xs"
        value={contactToEdit?.imageUrl}
        onChange={(e) => {
          setContactToEdit(
            (prevState) =>
              ({ ...prevState, imageUrl: e.target.value } as IContact)
          );
        }}
      />
      <span className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">{ContactType.HOME}</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            value={ContactType.HOME}
            checked={
              contactToEdit?.type === ContactType.HOME || !contactToEdit?.type
            }
            onChange={(event) =>
              setContactToEdit(
                (prev) =>
                  ({
                    ...prev,
                    type: event.target.checked
                      ? ContactType.HOME
                      : ContactType.OFFICE,
                  } as IContact)
              )
            }
          />
        </label>
      </span>
      <span className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">{ContactType.OFFICE}</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            value={ContactType.OFFICE}
            checked={contactToEdit?.type === ContactType.OFFICE}
            onChange={(event) =>
              setContactToEdit(
                (prev) =>
                  ({
                    ...prev,
                    type: event.target.checked
                      ? ContactType.OFFICE
                      : ContactType.HOME,
                  } as IContact)
              )
            }
          />
        </label>
      </span>
    </span>
  );

  const saveContact = () => {
    dispatch(contactActions.editContact(contactToEdit as IContact));
    setContactToEdit(null);
  };

  const deleteContact = () => {
    dispatch(contactActions.deleteContact(contactIdToDelete as number));
    setContactIdToDelete(null);
  };

  const closeDeleteDialog = () => {
    setContactIdToDelete(null);
  };

  return (
    <>
      <Dialog
        open={isEditDialogOpen}
        heading="Edit Contact"
        content={contactToEdit ? form : <></>}
        action="Save"
        type="info"
        onAction={saveContact}
        onCancel={closeDialog}
        onClose={closeDialog}
      />
      <Dialog
        open={isDeleteDialogOpen}
        heading="Delete Contact"
        content="Do you really want to delete this contact?"
        action="Delete"
        type="error"
        onAction={deleteContact}
        onCancel={closeDeleteDialog}
        onClose={closeDeleteDialog}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            setContactToEdit={setContactToEdit}
            setContactIdToDelete={setContactIdToDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Grid;
