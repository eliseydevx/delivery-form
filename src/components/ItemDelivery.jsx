import React from "react";
import Delete from "../image/trash.svg";
import Counter from "./Counter";

function ItemDelivery({ image, name, model, quantity, shipment, remaining }) {
  return (
    <div className="item-delivery">
      <div className="item-delivery__image-block">
        <img src={image} alt="Image Item" />

        <div className="item-delivery__about">
          <p className="item-delivery__about_name">{name}</p>
          <p className="item-delivery__about_model">{model}</p>
        </div>
      </div>

      <Counter />

      <p className="firm-component__sums">{quantity}</p>

      <p className="firm-component__sums">{shipment}</p>
      <p className="firm-component__sums">{remaining}</p>

      <img src={Delete} alt="Delete Image" />
    </div>
  );
}

export default ItemDelivery;
