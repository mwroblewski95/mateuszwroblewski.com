import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './ProjectHeader.module.css';
const ProjectHeader = ({ name, description, image, linkGithub, linkLive }) => {
  const { t } = useTranslation('portfolio');

  return (
    <header className={styles.projectHeader}>
      <h2>{name}</h2>
      <div className={styles.projectPreviewImage}>
        <Image src={image} alt={`${name} ${t('imageAlt')}`} width={711} height={400} />
      </div>
      <p>{description}</p>
      <div className={styles.projectLinks}>
        <a href={linkGithub} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
          {t('github')} &rarr;
        </a>
        <a href={linkLive} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
          {t('liveSite')} &rarr;
        </a>
      </div>
    </header>
  );
};

export default ProjectHeader;
