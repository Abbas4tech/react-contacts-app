import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { IContact, contactActions } from "../Store/slices/contacts-slice";
import Dialog from "./Dialog";
import Form from "./Form";

const Grid = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState<IContact | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState<number | null>();
  const [contactToAdd, setContactToAdd] = useState<IContact | null>(null);

  const dispatch = useDispatch();

  const contacts = useSelector(
    (state: RootState) => state.contactReducer.contact
  );
  const contactAdd = useSelector(
    (state: RootState) => state.contactReducer.isDialogOpen
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

  const AddContact = () => {
    if (contactToAdd) {
      dispatch(contactActions.addedContact(contactToAdd));
      setContactToAdd(null);
    }
    dispatch(contactActions.openDialog(false));
  };

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
        open={contactAdd}
        heading="Add Contacts"
        content={
          contactAdd ? (
            <Form state={contactToAdd} setState={setContactToAdd} />
          ) : (
            <></>
          )
        }
        action="Save"
        type="success"
        onAction={AddContact}
        onCancel={() => dispatch(contactActions.openDialog(false))}
        onClose={() => dispatch(contactActions.openDialog(false))}
      />
      <Dialog
        open={isEditDialogOpen}
        heading="Edit Contact"
        content={
          contactToEdit ? (
            <Form state={contactToEdit} setState={setContactToEdit} />
          ) : (
            <></>
          )
        }
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
