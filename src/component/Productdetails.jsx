import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "./redux/createSlice";
import { toast } from "react-toastify";
import "./p.css"; 

const Productdetails = ({ item }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addtocart({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <div className="product-card text-center">
      <img src={item.image} className="product-image mb-3" alt={item.name} />
      <div className="product-info">
        <h2 className="product-title">{item.name}</h2>
        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="product-price">${item.price}</p>
        <button
          className="product-btn btn btn-primary w-100 mt-2"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Productdetails;
