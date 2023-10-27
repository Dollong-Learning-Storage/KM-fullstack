import useFetcher from "../../hooks/useFetcher";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addDetail } from "../../redux/detailSlice";

const Home = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);

  const { data, isLoading } = useFetcher({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <p>Halo dunia</p>
      <p>Total isi cartmu: {carts?.length}</p>
      <br />
      <br />
      {data.map((item, index) => {
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
    </main>
  );
};

export default Home;
