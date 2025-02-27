import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchBar.jsx';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>Film Web Sitesi</Link>
                <nav className={styles.nav}>
                    <Link to="/movies" className={styles.navLink}>Filmler</Link> {/* Correct link */}
                    {/* Other links can be added here */}
                </nav>
            </div>
        </header>
    );
};

export default Header;