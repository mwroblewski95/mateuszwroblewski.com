import { createContext } from 'react';

const NavbarContext = createContext({ isMenuOpen: false, toggleMenu: () => {}, closeMenu: () => {} });

export default NavbarContext;
