import { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import NavbarContext from '../../../context/NavbarContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <NavbarContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      <Toolbar />
      <SideDrawer />
    </NavbarContext.Provider>
  );
};

export default Navbar;
