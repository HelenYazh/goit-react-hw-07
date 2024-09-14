import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const initialValues = {
  name: "",
  number: "",
};

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required!"),
  number: Yup.string()
    .matches(phoneRegExp, "Must be 'xxx-xx-xx' format")
    .required("A phone number is required!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.name,
      number: values.number,
    };

    const finalContact = {
      id: nanoid(),
      ...contactObject,
    };

    dispatch(addContact(finalContact));

    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formValidationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Number</span>
            <Field type="tel" name="number" />
            <ErrorMessage
              className={css.errorMsg}
              name="number"
              component="span"
            />
          </label>

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
