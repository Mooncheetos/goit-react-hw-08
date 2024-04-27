import css from "../components/App.module.css";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { selectLoading, selectError } from "../redux/contactsSlice";
import { useEffect } from "react";

function App() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <div className={css.phoneBookContainer} >
      <h1 className={css.phoneBookTitle}>Phonebook</h1>
      <ContactForm />
        <SearchBox />
        {isLoading && !error && <b>Query is executed...</b>}
      <ContactList />
      </div>
      </>
  );
}

export default App;