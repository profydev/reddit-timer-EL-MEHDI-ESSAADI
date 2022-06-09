import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '../../Assets/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className={styles.list}>
          <li><Link to="search">Search</Link></li>
          <li><a href="#HowItWorks">How it works</a></li>
          <li><a href="#About">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
