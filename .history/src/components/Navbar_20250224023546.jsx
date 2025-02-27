import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">🎬 FilmEart</Link>
            </div>
            <SearchBar />
            <ul className={styles.navLinks}>
                <li><Link to="/">Ana Səhifə</Link></li>
                <li><Link to="/about">Haqqımızda</Link></li>
                <li><Link to="/contact">Əlaqə</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
