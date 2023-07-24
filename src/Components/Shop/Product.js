import React from "react";

export default function Product(props) {
  function addToCart(id) {
    props.addToShop(id);
  }

  return (
    <div className="shop-item">
      <span className="shop-item-title">{props.title}</span>
      <img className="shop-item-image" src={props.img} alt={props.title} />
      <div className="shop-item-details">
        <span className="shop-item-price">${props.price}</span>
        <button
          className="btn btn-primary shop-item-button"
          type="button"
          onClick={() => addToCart(props.id)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
