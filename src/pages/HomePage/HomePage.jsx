import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <h1>Greetings and welcome to our PhoneBook app</h1>
      <h2> We are delighted to see you as a part of our community.</h2>
      <div className={css.homeParagraf}>
        <p>Join us in our mission to create a brighter future!</p>
        <Link className={css.link} to="/register">
          Register
        </Link>
      </div>
      <div className={css.homeParagraf}>
        <p>Have you joined us?</p>
        <Link className={css.link} to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;