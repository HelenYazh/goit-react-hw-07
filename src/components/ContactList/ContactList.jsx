import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return filteredContacts.map((contact) => {
    return (
      <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
      />
    );
  });
};

export default ContactList;
