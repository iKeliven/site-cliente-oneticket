import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/screens/Home.tsx';
import Shows from './assets/screens/Shows.tsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/shows" element={<Shows />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
