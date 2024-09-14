import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

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
