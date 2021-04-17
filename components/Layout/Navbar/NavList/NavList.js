import { useTranslation } from 'next-i18next';
import NavItem from '../NavItem/NavItem';
import styles from './NavList.module.css';
const NavList = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.navList}>
      <ul className={styles.navItems}>
        <NavItem to="home" type="scroll">
          {t('home')}
        </NavItem>
        <NavItem to="about" type="scroll">
          {t('about')}
        </NavItem>
        <NavItem to="skills" type="scroll">
          {t('skills')}
        </NavItem>
        <NavItem to="portfolio" type="scroll" portfolio>
          {t('portfolio')}
        </NavItem>
        <NavItem to="contact" type="scroll">
          {t('contact')}
        </NavItem>
        <NavItem to="/blog" type="navigate" blog>
          {t('blog')}
        </NavItem>
      </ul>
      <h3 className={styles.changeLanguageText}>{t('changeLanguage')}</h3>
      <ul className={styles.languageList}>
        <NavItem to="/" type="navigate" locale="en">
          EN
        </NavItem>
        <NavItem to="/pl" type="navigate" locale="pl">
          PL
        </NavItem>
      </ul>
    </div>
  );
};

export default NavList;
