import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">🎬 MovieWind</Link>
            </div>
            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
