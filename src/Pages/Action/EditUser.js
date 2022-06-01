import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3003/users/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, []);

  const data = {
    id: id,
    name: name,
    email: email,
    phone: phone,
  };
  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3003/users/${id}`, data).then(navigate('/home'));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h1 className="text-black text-3xl font-semibold mb-6">Edit User</h1>

      <form className="w-[80%] h-full flex flex-col justify-center items-center mt-4 gap-4">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" className="w-[80%] bg-white/10 text-xl outline-none border py-4 pl-6 border-zinc-400"></input>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" className="w-[80%] bg-white/10 text-xl outline-none border py-4 pl-6 border-zinc-400"></input>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter your phone" className="w-[80%] bg-white/10 text-xl outline-none border py-4 pl-6 border-zinc-400 mb-5"></input>
        <button onClick={Update} className="w-[80%] bg-blue-600 mt-4 text-xl outline-none border py-4 pl-6 text-white">
          Save Data
        </button>
        <Link to="/home" className="w-[80%] bg-blue-600 mt-1 text-xl outline-none border py-4 pl-6 text-white">
          <h2 className="text-center">Back to Home</h2>
        </Link>
      </form>
    </div>
  );
}

export default EditUser;
