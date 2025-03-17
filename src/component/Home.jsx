import React from 'react';
import products from "../products.json";
import Pdetails from './pdetails';
import { FaShoppingCart } from 'react-icons/fa';
import "../index.css"
import "../index.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Home = () => {
  const total_Quantity = useSelector((state) => state.cart.total_Quantity);
  return (
  <div className='main'>
 
      
    <Link to="/cart">  <div className="cart-icon-wrapper icon">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-badge">{total_Quantity}</span>

    </div></Link>


    {products.map((item, index) => (
  
<div className='name'>
<Pdetails item={item} />
</div>

))}
  </div>
  );
}

export default Home;
