import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialMedia.module.css';
const SocialMedia = () => {
  const { t } = useTranslation('contact');

  return (
    <div>
      <h3>{t('socialMedia')}</h3>
      <ul className={styles.socialMediaIconsList}>
        <li>
          <a className={styles.socialMediaIcon} href="https://github.com/mwroblewski95" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a className={styles.socialMediaIcon} href="https://www.linkedin.com/in/mwroblewski95" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a className={styles.socialMediaIcon} href="https://twitter.com/mwroblewski95" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a className={styles.socialMediaIcon} href="https://www.facebook.com/mwroblewski95" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a className={styles.socialMediaIcon} href="https://www.instagram.com/mwroblewski95" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
