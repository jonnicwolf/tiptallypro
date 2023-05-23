import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TipSheet from './components/TipSheet';
import BalanceRegister from './components/BalanceRegister';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<TipSheet/>} />
        <Route path='/balance-register' element={<BalanceRegister/>} /> 
        {/* <Route path='/manuals' element={<Manuals/>} /> */}
      </Routes>
    </>
  )
};

export default App;
