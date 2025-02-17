import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await axios.get("http://localhost:3000/api/users");
      const { data } = users.data;
      setUsers(data);
      console.log(data);
    };
    getUsers();
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-[600px]">
        <Link
          to="/createUser"
          className="w-[200px] h-[50px] bg-gray-600 text-white mb-4 p-3 rounded"
        >
          Create Users
        </Link>

        <table className="w-full border-collapse mt-10">
          <thead>
            <tr className="gap-[10px] text-[20px]">
              <th className="w-[200px] border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.phone}</td>
                <td className="border p-2">
                  <Link
                    to={`/editUser/${user._id}`}
                    className="cursor-pointer bg-gray-600 p-1 rounded ml-2"
                  >
                    ✏
                  </Link>
                  <Link
                    to={`/deleteUser/${user._id}`}
                    className="cursor-pointer bg-gray-600 p-1 rounded ml-2"
                  >
                    ❌
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
