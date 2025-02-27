import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/about" className={styles.link}>About</Link>
      <Link to="/contact" className={styles.link}>Contact</Link>
    </nav>
  );
}

export default Navbar;
