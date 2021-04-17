import { useTranslation } from 'next-i18next';
import styles from './Footer.module.css';
const Footer = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className="container center">
        &copy;{currentYear} {t('footer')}
      </p>
    </footer>
  );
};

export default Footer;
