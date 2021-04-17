import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './Brand.module.css';

const Brand = () => {
  const { t } = useTranslation('common');

  const brandHandler = e => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a onClick={brandHandler} href="#" className={styles.brand}>
      <span className={styles.logo}>
        <Image src="/images/favicon.svg" alt={t('brandAlt')} width="40px" height="40px" />
      </span>
      <span>
        Mateusz
        <br />
        Wróblewski
      </span>
    </a>
  );
};

export default Brand;
