import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import AddUser from './Pages/Action/AddUser';
import EditUser from './Pages/Action/EditUser';
import DetailUser from './Pages/Action/DetailUser';
import FormLogin from './Pages/BasePage/Login';
import FormRegister from './Pages/BasePage/Register';

function Url() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route index element={<FormLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/home/add-user" element={<AddUser />} />
        <Route path="/home/detail-user/:id" element={<DetailUser />} />
        <Route path="/home/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default Url;
