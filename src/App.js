import React from 'react';
import MenuPage from './components/MenuPage';
import PlaceOrderPage from './components/PlaceOrderPage';
import OrdersPage from './components/OrdersPage';

function App() {
  return (
    <div className="App">
      <MenuPage />
      <PlaceOrderPage />
      <OrdersPage />
    </div>
  );
}

export default App;
