import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CashOut from './components/CashOut';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<CashOut/>} />
      </Routes>
    </>
  )
};

export default App;
