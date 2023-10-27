import { useSelector } from "react-redux";
import CardList from "../../components/data-display/CardList";

const Home = () => {
  const carts = useSelector((state) => state.cart);

  return (
    <main>
      <p>Halo dunia</p>
      <p>Total isi cartmu: {carts?.length}</p>
      <br />
      <br />
      <CardList query="" />
    </main>
  );
};

export default Home;
