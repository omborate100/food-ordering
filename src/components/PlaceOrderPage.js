import React, { useState } from 'react';
import axios from 'axios';
import './PlaceOrderPage.css';

export default function PlaceOrderPage() {
  const [orderIds, setOrderIds] = useState('');
  const [orderResponse, setOrderResponse] = useState(null);

  const placeOrder = () => {
    const itemIds = orderIds.split(',').map(id => id.trim());
    axios.post('http://localhost:5000/order', { item_ids: itemIds })
      .then(response => {
        setOrderResponse(response.data);
      })
      .catch(error => console.error("There was an error placing the order:", error));
  };

  return (
    <div className="place-order-container">
      <h2>Place Your Order</h2>
      <div className="input-group">
        <input
          type="text"
          value={orderIds}
          onChange={e => setOrderIds(e.target.value)}
          placeholder="Enter item IDs separated by commas"
          className="input-field"
        />
        <button onClick={placeOrder} className="place-order-btn">Place Order</button>
      </div>
      {orderResponse && (
        <div className="order-response">
          Order Placed Successfully! Total Price: ${orderResponse.total_price}
        </div>
      )}
    </div>
  );
}
