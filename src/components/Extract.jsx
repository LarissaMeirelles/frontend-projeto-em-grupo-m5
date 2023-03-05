import React, { useEffect, useState } from 'react';
import { api } from '../axios/api';
import cookie from '../axios/function';
import Table from 'react-bootstrap/Table';

function Extract() {
  const [spendings, setSpendings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = cookie.getCookie('token');
      api.defaults.headers.authorization = `Bearer ${token}`;

      const response = await api.get('/spendings');
      setSpendings(response.data.result);

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div className="loading">Carregando dados...</div>;
  }

  function formatISODate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th colSpan={3} style={{ backgroundColor: '#5356C2', textAlign: 'center', fontSize: 'x-large' }}>
            EXTRATO
          </th>
        </tr>
        <tr>
          <th>DATA</th>
          <th>DESPESA</th>
          <th>VALOR (R$)</th>
        </tr>
      </thead>
      <tbody>
          {spendings.map((spending) => (
          <tr key={spending.s_id}>
            <td>{formatISODate(spending.s_date)}</td>
            <td>{spending.c_name}</td>
            <td>{spending.s_value}</td>
          </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default Extract;