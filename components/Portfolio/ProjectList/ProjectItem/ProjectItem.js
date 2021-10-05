import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectItem.module.css';
const ProjectItem = ({ image, name, description, to }) => {
  const { t } = useTranslation('portfolio');

  return (
    <li className={styles.project}>
      <Image src={image} alt={`${name} ${t('imageAlt')}`} width={366} height={206} />
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <Link href={to}>
        <a>{t('linkText')} &rarr;</a>
      </Link>
    </li>
  );
};

export default ProjectItem;
