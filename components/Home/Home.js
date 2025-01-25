import { useTranslation } from 'next-i18next';
import Image from "next/legacy/image";
import styles from './Home.module.css';
const Home = ({ aboutSectionNode }) => {
  const { t } = useTranslation('home');

  const scrollToAboutSectionHandler = e => {
    e.preventDefault();
    aboutSectionNode.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home" className={styles.home}>
      <div className="container center">
        <div className={styles.developerImage}>
          <Image src="/images/home/developer.svg" width={840} height={840} alt={t('imageAlt')} />
        </div>
        <h1 className={styles.heading}>
          {t('fullName')}
          <br />
          {t('profession')}
        </h1>
        <a href="#about" onClick={scrollToAboutSectionHandler}>
          {t('seeMore')} &darr;
        </a>
      </div>
    </header>
  );
};

export default Home;
