import React from "react";
import Button from "../../components/button";
import styles from "./styles.module.css";

const Card = ({ title, image, price, onAddToCart }) => {
  return (
    <div className={styles.cardContainer}>
      <img width={100} src={image} alt={title} />
      <p className="title">{title}</p>
      <p className="price">{price}</p>
      <Button onClick={onAddToCart}>Add To Cart</Button>
    </div>
  );
};

export default Card;
