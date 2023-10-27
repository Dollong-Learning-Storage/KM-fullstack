import Card from "../../Card";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addDetail } from "../../../redux/detailSlice";
import { addToCart } from "../../../redux/cartSlice";
import useFetcher from "../../../hooks/useFetcher";
import styles from "./styles.module.css";
import { useProductsQuery } from "../../../redux/services/fakeStore";

const CardList = ({ query = "products" }) => {
  const dispatch = useDispatch();

  // const { data, isLoading } = useFetcher({
  //   path,
  // });

  const { data, isLoading } = useProductsQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.cardList}>
      {data?.map((item, index) => {
        return (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            onClick={() =>
              dispatch(
                addDetail({
                  title: item.title,
                  image: item.image,
                  price: item.price,
                })
              )
            }
            onAddToCart={() =>
              dispatch(
                addToCart({
                  title: item.title,
                  image: item.image,
                  price: item.price,
                })
              )
            }
          />
        );
      })}
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  query: PropTypes.string.isRequired,
};
