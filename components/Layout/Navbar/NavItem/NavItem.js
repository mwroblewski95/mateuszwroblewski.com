import { useContext } from 'react';
import NavbarContext from '../../../../context/NavbarContext';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { useRouter } from 'next/router';
import styles from './NavItem.module.css';

const NavigationItem = ({ children, to, type, locale, blog, portfolio }) => {
  const { closeMenu } = useContext(NavbarContext);
  const router = useRouter();

  const changePageAndScroll = to => {
    closeMenu();
    localStorage.setItem('scrollToSection', to);
  };

  let navItem;
  if (type === 'scroll') {
    navItem = (
      // The empty href attribute in LinkScroll must be, because without it these links are impossible to navigate by keyboard to them.
      <LinkScroll onClick={closeMenu} to={to} smooth={true} duration={400} offset={-60} spy={true} activeClass={styles.active} className={styles.navItem} href="">
        {children}
      </LinkScroll>
    );

    if (router.pathname.includes('/portfolio') || router.pathname.includes('/blog')) {
      navItem = (
        <Link href="/">
          <a onClick={() => changePageAndScroll(to)} className={`${styles.navItem} ${router.pathname.includes('/portfolio') && portfolio ? styles.active : null}`}>
            {children}
          </a>
        </Link>
      );
    }
  }

  if (type === 'navigate') {
    navItem = (
      <Link href={to} locale={locale}>
        <a onClick={closeMenu} className={`${styles.navItem} ${router.pathname.includes('/blog') && blog ? styles.active : null}`}>
          {children}
        </a>
      </Link>
    );
  }

  return <li>{navItem}</li>;
};

export default NavigationItem;
