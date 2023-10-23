import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Button from "./components/button";

function App() {
  // document.getElementById('iniidnya').onclick = () => alert('halo')

  return (
    <>
      <Navbar />
      <main>
        <p>Halo dunia</p>
        <Button />
      </main>
      <Footer />
    </>
  );
}

export default App;
