import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Lodging from './pages/lodging/Lodging.jsx';
import Error from './pages/error/Error';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import './styles/App.scss'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
