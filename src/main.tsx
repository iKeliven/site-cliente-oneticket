import { createRoot } from 'react-dom/client'; // Importe createRoot corretamente

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/screens/Home.tsx';
import './index.css';
import Login from './assets/screens/Login.tsx';
import DadosColaboradores from './assets/screens/DadosColaboradores.tsx';
import Colaboradores from './assets/screens/Colaboradores.tsx';
import Eventos from './assets/screens/Eventos.tsx';
import NovoEvento from './assets/screens/NovoEvento.tsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/oneticket" element={<Home />} />
        <Route path="/colaboradores" element={<Colaboradores />} />
        <Route path="/colaboradores/dado" element={<DadosColaboradores />} />
        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/eventos/novo" element={<NovoEvento/>} />
      
      </Routes>
    </Router>
  </React.StrictMode>
);
