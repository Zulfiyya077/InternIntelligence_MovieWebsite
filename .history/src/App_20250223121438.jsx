import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/global.css'; // Global stilleri import et

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Diğer rotalar buraya eklenebilir */}
            </Routes>
        </Router>
    );
};

export default App;