import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Navbar from './components/Navbar';
import styles from './App.module.css';
import About from './pages/About';
import Contact from './pages/Contact';
Se
const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/search" element={<SearchResultsPage />} />
                    <Route path="/movie/:id" element={<MovieDetailsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
