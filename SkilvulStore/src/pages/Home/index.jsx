import useFetcher from "../../hooks/useFetcher";
import Card from "../../components/Card";
import { useState } from "react";

const Home = () => {
  const [totalCart, setTotalCart] = useState(0);

  const { data, isLoading } = useFetcher({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <p>Halo dunia</p>
      <p>Total isi cartmu: {totalCart}</p>
      <br />
      <br />
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            onAddToCart={() => setTotalCart(totalCart + 1)}
          />
        );
      })}
    </main>
  );
};

export default Home;
