import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import NavBar from './components/NavBar';
import BalanceRegisterPage from './pages/BalanceRegisterPage';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/balance-register' element={<BalanceRegisterPage />} />
      </Routes>
    </>
  )
};

export default App;
