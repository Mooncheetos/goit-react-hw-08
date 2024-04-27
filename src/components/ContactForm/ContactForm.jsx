import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from './ContactForm.module.css';

function ContactForm() {
    const initialValues = {
        name:"",
        number:"",
    };
    const dispatch = useDispatch();
    const onAddContact = (formData) => {        
        dispatch(addContact(formData));
    };

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be less than 50 characters')
            .required('Name is required'),
        number: Yup.string()
            .min(3, 'Number must be at least 3 characters')
            .max(50, 'Number must be less than 50 characters')
            .required('Number is required'),
    });

    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (values, actions) => {
        onAddContact(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <label className={css.formTitle} htmlFor={nameId}>Name:</label>
                <Field className={css.formInput} id={nameId} name="name" type="text" />
                <ErrorMessage name="name" component="span" className={css.errorMassage} />

                <label className={css.formTitle} htmlFor={numberId}>Number:</label>
                <Field className={css.formInput} id={numberId} name="number" type="tel" />
                <ErrorMessage name="number" component="span" className={css.errorMassage} />

                <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
