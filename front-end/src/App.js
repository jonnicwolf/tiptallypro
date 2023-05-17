import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TipSheet from './components/TipSheet';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<TipSheet/>} />
        {/* <Route path='/manuals' element={<Manuals/>} />
        <Route path='/balance-register' element={<BalanceRegister/>} /> */}
      </Routes>
    </>
  )
};

export default App;
