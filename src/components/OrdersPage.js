import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrdersPage.css'; // Importing the CSS module

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => console.error("There was an error fetching the orders:", error));
  }, []);

  return (
    <div className="orders-container">
      <h2 className="orders-title">Customer Orders</h2>
      {orders.map(order => (
        <div className="order-card" key={order.order_id}>
          <h3>Order ID: {order.order_id}</h3>
          <p>Total Price: ${order.total_price}</p>
          <ul>
            {order.items.map(item => (
              <li key={item.id}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
