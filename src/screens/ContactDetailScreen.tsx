import React from "react";

import { useParams } from "react-router-dom";

const ContactDetailScreen = () => {
  const { contactId } = useParams();

  console.log(contactId);

  return <div>ContactDetailScreen</div>;
};

export default ContactDetailScreen;
