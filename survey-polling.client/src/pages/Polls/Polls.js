import React, { useState, useEffect } from 'react';

export default function Polls() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <h1>{items.id}</h1>
      <h1>{items.title}</h1>
    </div>
  );
}
