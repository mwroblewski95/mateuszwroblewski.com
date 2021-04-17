import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
const About = ({ setAboutSectionNode }) => {
  const { t } = useTranslation('about');

  const aboutSectionNode = useRef();

  useEffect(() => {
    setAboutSectionNode(aboutSectionNode.current);
  }, []);

  return (
    <section id="about" ref={aboutSectionNode} className={styles.about}>
      <div className="container">
        <h2>{t('sectionTitle')}</h2>
        <div className={styles.aboutContent}>
          <Image src="/images/about/about.jpeg" alt={t('aboutImgAlt')} width={700} height={700} quality={100} className={styles.aboutImg} />
          <p className={styles.aboutText}>
            {t('introduction')}
            <br />
            {t('whoFrom')}
            <br />
            {t('story')}
            <br />
            {t('goal')}
            <br />
            {t('futureDevelopment')}
            <br />
            {t('hobby')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
