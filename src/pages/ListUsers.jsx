import React, { useEffect, useContext, useState } from 'react';
import { api, getUsers } from '../axios/api';
import cookie from '../axios/function';
import { AuthContext } from '../contexts/auth';

function ListUsers() {
  const { logout } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    (async ()=>{
    
    const token = cookie.getCookie('token');
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = await getUsers();
    setUsers(response.data.result);


    setLoading(false);
    })()
    
  }, []);

  if (loading) {
    return <div className="loading">Carregando dados...</div>;
  }

  return (
    <div>
      <h1>Listagem de usuários</h1>
      <button onClick={handleLogout}>Logout</button>

      {users.map((user) => (
        <ul key={user.u_id}>
          <h1>{user.u_name}</h1>
            <li>{user.u_email}</li>
            <li>{user.u_password}</li>
            <li>{user.u_telephone}</li>
            <li>{user.u_income}</li>
            <li>{user.u_gender}</li>
            <li>{user.u_address}</li>
            <li>{user.u_avatar}</li>
            <li>{user.u_date_of_birth}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListUsers;


