import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import NavBar from './components/NavBar';
import BalanceRegisterPage from './pages/BalanceRegisterPage';
import TipSheetPage from './pages/TipSheetPage';
import Copyright from './components/Copyright';

function App() {
  return (
    <>
      <Content>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tip-calculator' element={<TipSheetPage />} />
          <Route path='/register-calculator' element={<BalanceRegisterPage />} />
        </Routes>
      </Content>
      < Copyright/>
    </>
  );
};

const Content = styled.div`
  height: 97vh;
`;

export default App;
