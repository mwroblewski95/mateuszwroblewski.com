import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styles from '../styles/404.module.css';
const NotFound = () => {
  const { t } = useTranslation('common');

  return (
    <section className={styles.notFound}>
      <p>{t('notFoundText')}</p>
      <Link href="/">
        <a>{t('notFoundLink')} &rarr;</a>
      </Link>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default NotFound;
