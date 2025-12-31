import React from 'react';
import HomeComp from './page/HomeComp';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomeComp />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
