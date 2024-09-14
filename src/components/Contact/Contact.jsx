import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div>
        <p className={css.info}>
          <FaUser />
          &nbsp;
          {name}
        </p>
        <p className={css.info}>
          <BsFillTelephoneFill />
          &nbsp;
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
