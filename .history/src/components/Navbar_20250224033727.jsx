import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search/${searchQuery}`);  // Axtarışa görə nəticələrə yönləndiririk
        }
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/">MovieApp</a>
            </div>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Film axtar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Axtar</button>
            </div>
        </div>
    );
};

export default Navbar;
