import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
   <div>
   <h1 className="text-2xl font-bold text-center">Usuários</h1>
    <div className="flex justify-center"> 

      <table>
        <thead className="text-1xl font-bold mb-4 text-center">
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div> 
  );
};

export default Users;
