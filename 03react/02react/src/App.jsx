import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuComp from './components/layout/MenuComp';
import HomeComp from './components/pages/HomeComp';
import AboutComp from './components/pages/AboutComp';
import BoardComp from './components/pages/BoardComp';

function App() {
  return (
    <BrowserRouter>
      <MenuComp />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeComp />}></Route>
          <Route path="/about" element={<AboutComp />} />
          <Route path="/board" element={<BoardComp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
