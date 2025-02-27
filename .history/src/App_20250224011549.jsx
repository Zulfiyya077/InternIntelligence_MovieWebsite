import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Navbar from './components/Navbar';
import styles from './App.module.css';

const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetailsPage />} />
                    <Route path="/search/:query" element={<SearchResultsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
