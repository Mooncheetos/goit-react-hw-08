import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

function ContactList() {    
    const filteredContacts = useSelector(selectFilteredContacts);
    
    return (
        <ul className={css.contactList}>
            {filteredContacts.map((contact) => (
                <li className={css.contactItem} key={contact.id}>
                    <Contact contacts={contact} />
            </li>
        ))}
        </ul>       
    );
}

export default ContactList;