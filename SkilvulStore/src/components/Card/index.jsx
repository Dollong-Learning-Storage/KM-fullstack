import Button from "../button";
import styles from "./styles.module.css";

const Card = ({ title, image, price, onClick, onAddToCart }) => (
  <div className={styles.cardContainer} onClick={onClick}>
    <img width={100} src={image} alt={title} />
    <p className={styles.titleText}>{title}</p>
    <p className="price">{price}</p>
    <Button
      onClick={(e) => {
        e.stopPropagation();
        onAddToCart();
      }}
    >
      Add To Cart
    </Button>
  </div>
);

export default Card;
