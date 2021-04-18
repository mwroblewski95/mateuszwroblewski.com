import { useTranslation } from 'next-i18next';
import { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';
const ContactForm = () => {
  const { t } = useTranslation('contact');
  const [sendFormStatus, setSendFormStatus] = useState('');
  const [formNode, setFormNode] = useState(null);
  const formNodeRef = useRef();

  useEffect(() => {
    setFormNode(formNodeRef.current);
  }, []);

  if (sendFormStatus) {
    setTimeout(() => setSendFormStatus(null), 5000);
  }

  return (
    <div>
      <h3>{t('contactFormHeading')}</h3>
      <Formik
        initialValues={{ email: '', message: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(t('invalidEmail'))
            .required(t('required'))
            .trim(),
          message: Yup.string()
            .required(t('required'))
            .trim(),
        })}
        onSubmit={(values, { resetForm }) => {
          emailjs.sendForm(process.env.emailJSServiceId, process.env.emailJSTemplateId, formNode, process.env.emailJSUserId).then(
            result => {
              setSendFormStatus(t('formSent'));
              resetForm();
            },
            error => {
              setSendFormStatus(t('formError'));
            },
          );
        }}
      >
        {({ isSubmitting }) => (
          <Form ref={formNodeRef}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                {t('email')}
              </label>
              <Field name="email" id="email" type="email" className={styles.field} />
              <div className={styles.errorMessage}>
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.inputLabel}>
                {t('message')}
              </label>
              <Field name="message" id="message" as="textarea" rows="10" className={styles.field} />
              <div className={styles.errorMessage}>
                <ErrorMessage name="message" />
              </div>
            </div>
            <button disabled={isSubmitting} type="submit" className={styles.buttonSubmitForm}>
              {t('formSubmitButtonText')} &rarr;
            </button>
            <p className={styles.sendFormStatus}>{sendFormStatus}</p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
