import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus,removeitem,removeall } from "./redux/createSlice";
import { FaTrash } from 'react-icons/fa';
import "./cart.css";
const Cart = () => {
  const cartitem = useSelector((state) => state.cart.cartitem) || []; // نحط default value []
  const Total_price = useSelector((state) => state.cart.Total_price) || [];
  const dispatch = useDispatch();
  return (
    <div className="cart-container">
      {cartitem.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table table-bordered table-striped table-hover text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th></th>
              <th>Product Image</th>
              <th className="p">Product Name</th>
              <th className="p">Price</th>
              <th className="p">Quantity</th>
              <th className="p">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartitem.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="70"
                    style={{ borderRadius: "8px" }}
                  />
                </td>
                <td className="name">{item.name}</td>
                <td>${item.price}</td>
                <td className="m">{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td >
                  <button className="p_m" onClick={() => dispatch(plus({ id: item.id }))}>
                    +
                  </button>

                  <button className="p_m" onClick={() => dispatch(minus({ id: item.id }))}>
                    -
                  </button>
                </td>
                <td>
                <button onClick={() =>
                              dispatch(removeitem({ id: item.id }))
                            } className="delete-btn">
      <FaTrash />
    </button>
                </td>
              </tr>
            ))}
          </tbody>
          <p className="total_price">Total Price : ${Total_price}</p>
          <button  onClick={() => dispatch(removeall())} className="delete-btnn">
  Remove All
</button>
        </table>
      )}
    </div>
  );
};

export default Cart;
