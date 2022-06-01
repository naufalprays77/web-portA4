import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);
  // let { id } = useParams();
  const loadUsers = () => {
    axios.get('http://localhost:3003/users').then((res) => {
      setUsers(res.data.reverse());
    });
  };
  useEffect(() => {
    loadUsers();
  }, []);

  function Delete(id) {
    axios.delete(`http://localhost:3003/users/${id}`).then(loadUsers());
    window.location.reload(true);
  }

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="w-full flex flex-col min-h-[50vh] justify-center items-center">
        <h1 className="text-black text-3xl font-semibold">Data User</h1>

        <table class="w-[80%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black">
          <thead class="border-b bg-gray-800">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Email
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Phone
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((data, index) => (
              <tr key={index} class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.name}</td>
                <td class="text-sm text-gray-900 font:light px-6 py-4 whitespace-nowrap">{data.email}</td>
                <td class="text-sm text-gray-900 font:light px-6 py-4 whitespace-nowrap">{data.phone}</td>
                <td className="flex justify-center items-center space-x-4 mt-1">
                  <Link to={`/home/detail-user/${data.id}`} className="px-6 py-2 text-white bg-blue-600 rounded-lg font-normal">
                    View
                  </Link>

                  <Link to={`/home/edit-user/${data.id}`} className="px-6 py-2 text-white bg-blue-600 rounded-lg font-normal">
                    Edit
                  </Link>
                  <button onClick={() => Delete(data.id)} className="px-6 py-2 text-white bg-blue-600 rounded-lg font-normal">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
