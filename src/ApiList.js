// src/ApiList.js
import React, { useState } from 'react';
import axios from 'axios';

const ApiList = () => {
  const [publicData, setPublicData] = useState('');
  const [adminData, setAdminData] = useState('');
  const [moderatorData, setModeratorData] = useState('');
  const [error, setError] = useState('');

  const callPublicApi = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/public');
      setPublicData(response.data);
    } catch (err) {
      setError('Failed to fetch public data');
    }
  };

  const callAdminApi = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming you have stored the token in localStorage
      const response = await axios.get('http://localhost:5000/api/admin', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAdminData(response.data);
    } catch (err) {
      setError('Failed to fetch admin data');
    }
  };

  const callModeratorApi = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming you have stored the token in localStorage
      const response = await axios.get('http://localhost:5000/api/moderator', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModeratorData(response.data);
    } catch (err) {
      setError('Failed to fetch moderator data');
    }
  };

  return (
    <div>
      <h1>API List</h1>
      <button onClick={callPublicApi}>Call Public API</button>
      <div>{publicData}</div>

      <button onClick={callAdminApi}>Call Admin API</button>
      <div>{adminData}</div>

      <button onClick={callModeratorApi}>Call Moderator API</button>
      <div>{moderatorData}</div>

      {error && <div>{error}</div>}
    </div>
  );
};

export default ApiList;
