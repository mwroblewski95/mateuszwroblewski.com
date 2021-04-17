import { useTranslation } from 'next-i18next';
import ContactForm from './ContactForm/ContactForm';
import SocialMedia from './SocialMedia/SocialMedia';
import styles from './Contact.module.css';
const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>{t('sectionTitle')}</h2>
        <div className={styles.contactContainer}>
          <ContactForm />
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};

export default Contact;
