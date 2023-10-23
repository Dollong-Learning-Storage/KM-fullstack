import "./common-styles.css";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <>
      <header>
        <h1>Logo</h1>
        <nav className={styles.headerNav}>
          <ul className={styles.listContainer}>
            <li>Cart: 0</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
