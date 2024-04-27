import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ contacts: { id, name, number } }) {
    
    const dispatch = useDispatch();
    const onDeleteContact = (contactId) => { dispatch(deleteContact(contactId)) };
    return (
        <>
        <div>
            <p className={css.contactName}><BsFillPersonFill />{name}</p>
            <p className={css.contactNumber}><BsFillTelephoneFill />{number}</p>
        </div>
            <button className={css.contactBtn} onClick={() => onDeleteContact(id)}>Delete</button>
            </>
    );
}

export default Contact;