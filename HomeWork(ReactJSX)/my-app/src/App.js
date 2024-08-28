import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
// Імпортуйте інші сторінки (CartPage, FavoritesPage) за необхідності

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Інші маршрути для CartPage, FavoritesPage */}
      </Routes>
    </Router>
  );
}

export default App;