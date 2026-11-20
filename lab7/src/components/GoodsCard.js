import React from "react";

function GoodsCard(props) {
  const { image, title, price } = props;

  return (
    <div className="goods-card">
      <img src={image} alt={title} className="goods-image" />
      <h3 className="goods-title">{title}</h3>
      <p className="goods-price">Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;