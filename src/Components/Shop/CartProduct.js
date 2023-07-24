import React from "react";

export default function CartProduct(props) {
  function removeProduct(id) {
    props.removeInShopping(id);
  }

  return (
    <div className="cart-row">
      <div className="cart-item cart-column">
        <img
          className="cart-item-image"
          src={props.img}
          width="100"
          height="100"
          alt=""
        />
        <span className="cart-item-title">{props.title}</span>
      </div>
      <span className="cart-price cart-column">${props.price}</span>
      <div className="cart-quantity cart-column">
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => removeProduct(props.id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}
