import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../shared/Product";
import Loader from "../shared/Loader";

// redux
import { fetchLipliner } from "../../redux/lipliner/liplinerAction";

// Style
import styles from "./categories.module.css";

const Lipliner = () => {
  const dispatch = useDispatch();
  const liplinerState = useSelector((state) => state.liplinerState);

  useEffect(() => {
    dispatch(fetchLipliner());
  }, []);

  return (
    <div className={styles.container}>
      {liplinerState.loading ? (
        <Loader />
      ) : liplinerState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        liplinerState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Lipliner;
