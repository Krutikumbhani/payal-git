import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View_data from './Api/View_data';
import Getapi from './Api/Getapi';
import Insertapi from './Api/Insert_api';
import Editapi from './Api/Editdata';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<View_data />} />
        <Route path='/get' element={<Getapi />} />
        <Route path='/add' element={<Insertapi />} />
        <Route path='/edit/:id' element={<Editapi />} />
      </Routes>
    </BrowserRouter>
  </>
);

