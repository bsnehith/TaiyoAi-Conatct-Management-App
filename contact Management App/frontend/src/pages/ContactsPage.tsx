import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectContacts } from "../features/contact";
import ContactList from "../components/ContactList";

const ContactsPage: React.FC = () => {
  const navigate = useNavigate();

  //use useSelector to get current contact list data
  const contacts = useSelector(selectContacts);

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex justify-center">
        <button
          className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
          type="button"
          onClick={() => navigate("/contact/create")}
        >
          Create Contact
        </button>
      </div>
      <div className="mt-8">
        {contacts.length === 0 && (
          <div className="text-center text-2xl text-gray-600">
            <p>No contacts found. Please create a contact using the button above.</p>
          </div>
        )}
        {contacts.length > 0 && <ContactList contacts={contacts} />}
      </div>
    </div>
  );
};

export default ContactsPage;
