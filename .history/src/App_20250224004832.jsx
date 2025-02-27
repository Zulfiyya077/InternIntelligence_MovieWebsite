import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import styles from './App.module.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // İstifadəçinin əvvəlki seçimlərini yükləyirik
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            setDarkMode(savedMode === 'dark');
        }
    }, []);

    useEffect(() => {
        // Mövzu dəyişikliyini localStorage-də saxlamaq
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        document.body.className = darkMode ? 'dark' : 'light';
    }, [darkMode]);

    return (
        <Router>
            <div className={styles.app}>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetailsPage />} />
                    <Route path="/search/:query" element={<SearchResultsPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
