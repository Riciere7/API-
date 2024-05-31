// src/components/Classroom.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Classroom() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Classroom</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Classroom;
