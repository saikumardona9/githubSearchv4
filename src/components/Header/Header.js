import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import Sun from '../../asserts/sun.png';
import Moon from '../../asserts/half-moon.png';

const Header = ({ toggleTheme }) => {
  const [theme, setTheme] = useState('light');
  const toggleThemeAction = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
    toggleTheme();
  }
  return(
    <header className="header">
      <a to='/'> <h1>LOGO</h1> </a>
      <button className="theme-btn" onClick={toggleThemeAction}><span>Change Theme</span> <img src={theme == 'light' ? Sun : Moon}  alt="theme icon"/></button>
    </header>
  )
}

export default Header;
