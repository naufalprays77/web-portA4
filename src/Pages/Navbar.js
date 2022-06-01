import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between">
      <Link to="/home">
        <h1 className="text-white text-3xl font-semibold">CRUD</h1>
      </Link>
      <Link to="home/add-user" className="w-48 bg-white text-blue-300 flex justify-center items-center font-semibold text-xl h-12 rounded-lg">
        Add User
      </Link>
    </div>
  );
}

export default Navbar;
