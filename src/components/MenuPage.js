import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MenuPage.css'; 

export default function MenuPage() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/menu')
      .then(response => {
        setMenu(response.data);
      })
      .catch(error => console.error("There was an error fetching the menu:", error));
  }, []);

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-grid">
        {menu.map(item => (
          <div className="menu-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Rs{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
