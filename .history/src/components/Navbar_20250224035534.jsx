import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const navigate = useNavigate();  // Navigasiya üçün istifadə olunur

    // Filtr seçildikdə, SearchResultsPage-ə yönləndiririk
    const handleFilterChange = (event) => {
        const filter = event.target.value;
        navigate(`/search/${filter}`); // Filtrə əsasən yönləndirmə
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">MovieSphere</Link>
            </div>
            <div className={styles.filterContainer}>
                <select onChange={handleFilterChange} className={styles.filterSelect}>
                    <option value="popular">Ən Populyar</option>
                    <option value="top_rated">Ən Yüksək Qiymətləndirilən</option>
                    <option value="now_playing">İndiki Oynayan</option>
                </select>
            </div>
            <div className={styles.navLinks}>
                <Link to="/about">Haqqında</Link>
                <Link to="/contact">Əlaqə</Link>
            </div>
        </div>
    );
};

export default Navbar;

