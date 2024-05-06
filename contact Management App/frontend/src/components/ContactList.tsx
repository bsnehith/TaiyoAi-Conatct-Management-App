import ContactActionButton from "./ContactActionButton";

// Define interface for contact
interface Contact {
  firstName: string;
  lastName: string;
  status: string;
  id: string;
}

// Define interface for contact list
interface ContactS {
  contacts: Contact[];
}

const ContactList = ({ contacts }: ContactS) => {
  return (
    <div className="lg:w-full flex flex-col justify-start items-stretch border">
      <table className="w-full bg-gradient-to-r from-gray-200 to-gray-400">
        <thead>
          <tr>
            <th className="border p-4">Status</th>
            <th className="border p-4">First Name</th>
            <th className="border p-4">Last Name</th>
            <th className="border p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact, index) => {
            return (
              <tr key={contact?.id} className={`transition-all duration-300 delay-${index} hover:bg-gray-100`}>
                <td className="border p-4 animate-pulse">{contact?.status}</td>
                <td className="border p-4 animate-pulse">{contact?.firstName}</td>
                <td className="border p-4 animate-pulse">{contact?.lastName}</td>
                <td className="border p-4">
                  <ContactActionButton id={contact?.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
