import { useTranslation } from 'next-i18next';
import { formatDate } from '../../../../lib/helperFunctions';
import styles from './PostHeader.module.css';
const PostHeader = ({ title, description, date, language }) => {
  const { t } = useTranslation('blog');

  const formattedDate = formatDate(date, language);

  return (
    <header className={styles.postHeader}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        {t('published')} {formattedDate}
      </p>
      <p>{t('createdBy')}</p>
    </header>
  );
};

export default PostHeader;
