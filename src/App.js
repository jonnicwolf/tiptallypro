import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import NavBar from './components/NavBar';
import BalanceRegisterPage from './pages/BalanceRegisterPage';
import TipSheetPage from './pages/TipSheetPage';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tip-calculator' element={<TipSheetPage />} />
        <Route path='/register-calculator' element={<BalanceRegisterPage />} />
      </Routes>
    </>
  )
};

export default App;
