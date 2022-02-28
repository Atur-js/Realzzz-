import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../shared/Product";
import Loader from "../shared/Loader";

// redux
import { fetchBronzer } from "../../redux/bronzer/bronzerAction";

// Style
import styles from "./categories.module.css";

const Bronzer = () => {
  const dispatch = useDispatch();
  const bronzerState = useSelector((state) => state.bronzerState);

  useEffect(() => {
    dispatch(fetchBronzer());
  }, []);

  return (
    <div className={styles.container}>
      {bronzerState.loading ? (
        <Loader />
      ) : bronzerState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        bronzerState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Bronzer;
