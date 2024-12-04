import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AuthenticationPage from './pages/AuthenticationPage';
import FavoritePage from './pages/FavoritePage';
import ErrorPage from './pages/ErrorPage';

import './App.css';
import HistoryPage from './pages/HistoryPage';
import FilmPage from './pages/FilmPage';

function App() {
  return (
    <Routes>
      <Route path='' element={<MainPage/>}/>
      <Route path='/signin' element={<LoginPage/>}/>
      <Route path='/signup' element={<AuthenticationPage/>}/>
      <Route path='/favorites' element={<FavoritePage/>}/>
      <Route path='/history' element={<HistoryPage/>}/>
      <Route path='/film/:id' element={<FilmPage/>}/>

      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  );
}

export default App;
