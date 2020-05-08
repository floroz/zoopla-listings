import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
interface Props {}

const Home = (props: Props) => {
  return (
    <main className={styles.home}>
      <header className={styles.header}>
        <h1>Zoopla Listing</h1>
      </header>
      <Link to="/manage" className={styles.link}>
        Manage Listing
      </Link>
    </main>
  );
};

export default Home;
