import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [totalCart, setTotalCart] = useState(0);

  return (
    <>
      <Navbar totalCart={totalCart} />
      <Home
        totalCart={totalCart}
        onAddToCart={() => setTotalCart(totalCart + 1)}
      />
      <Footer />
    </>
  );
}

export default App;
