import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ReactComponent as Logo } from '../../Assets/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <ul className={styles.list}>
          <li><Link to="search">Search</Link></li>
          <li><a href="#how-it-works ">How it works</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
