import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './View/Home';

import './Assets/Style/style.css';

function Url() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Url;
