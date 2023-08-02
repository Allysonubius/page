
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/page/Home/home';

import Navbar from './components/layout/navbar/navbar';
import Footer from './components/layout/footer/footer';
import Contato from './components/page/Contato/contato';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
