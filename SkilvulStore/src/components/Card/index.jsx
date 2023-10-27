import React from "react";
import Button from "../button";
import styles from "./styles.module.css";

const Card = ({ title, image, price, onClick, onAddToCart }) => (
  <button className={styles.cardContainer} onClick={onClick}>
    <img width={100} src={image} alt={title} />
    <p className="title">{title}</p>
    <p className="price">{price}</p>
    <Button onClick={onAddToCart}>Add To Cart</Button>
  </button>
);

export default Card;
