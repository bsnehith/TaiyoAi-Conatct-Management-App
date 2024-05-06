import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectContacts } from "../features/contact";
import { useEffect, useState } from "react";

const ContactView = () => {
  const navigate = useNavigate();
  //get contact id from browser url
  const { contactId } = useParams();

  //get current contacts state
  const contacts = useSelector(selectContacts);

  //state for initial contact detail
  const [detail, setDetail] = useState({
    firstName: "",
    lastName: "",
    status: "",
    id: "",
  });

  //get contact details by its id
  useEffect(() => {
    const findContact = () => {
      const contactDetail = contacts.find((contact) => contact.id === contactId);
      if (contactDetail) {
        setDetail(contactDetail);
      }
    };
    
    findContact();
  }, [contactId, contacts])

  return (
    <div className="flex flex-col content-center items-stretch gap-6 lg:p-8 animate-fadeIn">
      <header>
        <h1 className="text-3xl font-bold">Contact Details</h1>
      </header>
      <div className="flex flex-col content-center items-start gap-2 border overflow-auto rounded-md shadow-lg animate-bounce">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2 w-1/4">Id</th>
              <th className="border p-2 w-1/4">Status</th>
              <th className="border p-2 w-1/4">First Name</th>
              <th className="border p-2 w-1/4">Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{detail?.id}</td>
              <td className="border p-2">{detail?.status}</td>
              <td className="border p-2">{detail?.firstName}</td>
              <td className="border p-2">{detail?.lastName}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center gap-3 p-2 animate-pulse">
        <button
          className="border cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          type="button"
          onClick={() => navigate("/")}
        >
          Go to Contact list
        </button>
        <button
          className="border cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          type="button"
          onClick={() => navigate(`/contact/edit/${detail?.id}`)}
        >
          Edit the Contact
        </button>
      </div>
    </div>
  );
};

export default ContactView;
