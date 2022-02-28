import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../shared/Product";
import Loader from "../shared/Loader";

// redux
import { fetchEyebrow } from "../../redux/eyebrow/eyebrowAction";

// Style
import styles from "./categories.module.css";

const Eyebrow = () => {
  const dispatch = useDispatch();
  const eyebrowState = useSelector((state) => state.eyebrowState);

  useEffect(() => {
    dispatch(fetchEyebrow());
  }, []);

  return (
    <div className={styles.container}>
      {eyebrowState.loading ? (
        <Loader />
      ) : eyebrowState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        eyebrowState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Eyebrow;
