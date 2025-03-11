import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Lodging from './pages/lodging/lodging.jsx';
import Error from './pages/error/Error';
import Header from "./components/header/header.jsx";
import Footer from './components/footer/footer.jsx';
import './styles/App.css'

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
