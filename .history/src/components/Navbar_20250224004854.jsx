// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ darkMode, setDarkMode }) => {
    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <nav className={styles.navbar}>
            <h1>Movie App</h1>
            <button onClick={toggleTheme} className={styles.themeButton}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </nav>
    );
};

export default Navbar;
