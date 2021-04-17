import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { formatDate } from '../../../../lib/helperFunctions';
import styles from './PostListItem.module.css';
const PostListItem = ({ title, description, date, to, language }) => {
  const { t } = useTranslation('blog');

  const formattedDate = formatDate(date, language);

  return (
    <li>
      <h3 className={styles.postTitle}>{title}</h3>
      <p>{description}</p>
      <p>
        {t('published')} {formattedDate}
      </p>
      <Link href={`blog/${to}`}>
        <a>{t('readMore')} &rarr;</a>
      </Link>
    </li>
  );
};

export default PostListItem;
