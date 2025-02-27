import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies'; // Import the Movies component


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} /> {/* Add this line */}
            </Routes>
        </Router>
    );
};

export default App;