import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { AiFillMoon, AiFillSun } from 'react-icons/ai';
import { MdNotifications, MdSettings, MdShoppingCart } from 'react-icons/md';
import { FaPizzaSlice, FaUser } from 'react-icons/fa6';
import { useTheme } from '../../../hooks/useTheme.tsx';

type TypeHeaderProps = {
  role?: 'customer' | 'admin';
};

function Header(props: TypeHeaderProps) {
  const { theme, setTheme } = useTheme();
  const { role = 'customer' } = props;
  if (role === 'customer') {
    return (
      <header
        id="header_component"
        data-theme={theme}
      >
        <Link
          className="logo_container"
          to="/"
        >
          <FaPizzaSlice id="logo" />
          <span className="logo-text">PIZZA PARADISE</span>
        </Link>

        <div className="header-tools_group">
          <div onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}>
            {theme === 'dark' ? <AiFillMoon /> : <AiFillSun />}
          </div>
          <MdNotifications />
          <Link to={'/cart'}>
            <MdShoppingCart />
          </Link>
          <MdSettings />
          <FaUser />
        </div>
      </header>
    );
  }
  return (
    <header
      id="header_component"
      data-feature="special"
      data-theme={theme}
    >
      <div className="logo-and-label-container">
        <FaPizzaSlice id="logo" />
        <span className="logo-text"> PIZZA PARADISE </span>
        <span className="logo-label"> Admin </span>
      </div>
      <div className="header-tools_group">
        <div onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}>
          {theme === 'dark' ? <AiFillMoon /> : <AiFillSun />}
        </div>
        <MdNotifications />
        <MdSettings />
        <FaUser size={20} />
      </div>
    </header>
  );
}

export default Header;
