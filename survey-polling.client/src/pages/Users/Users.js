import React, { useState, useEffect } from 'react';

import './Users.scss';

export default function Polls() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('http://localhost:5000/api/user/');
    const items = await data.json();

    console.log(items);

    setItems(items);
  };

  return (
    <div className='container'>
      <table style={{ margin: '2em 0' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Host</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.isHost.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
