import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const data = {
    id: uuidv4(),
    name: name,
    email: email,
    phone: phone,
  };

  function Submit(e) {
    e.preventDefault();
    axios.post('http://localhost:3003/users', data).then(navigate('/home'));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h1 className="text-black text-3xl font-semibold">AddUser</h1>

      <form className="w-[80%] h-full flex flex-col justify-center items-center mt-4 gap-4">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" className="w-[80%] bg-white/10 text-xl outline-none border py-4 pl-6 border-zinc-400"></input>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" className="w-[80%] bg-white/10 text-xl outline-none border py-4 pl-6 border-zinc-400"></input>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter your phone" className="w-[80%] bg-white/10 text-xl outline-none border py-4 pl-6 border-zinc-400"></input>
        <button onClick={Submit} className="w-[80%] bg-blue-600 mt-4 text-xl outline-none border py-4 pl-6 text-white">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
