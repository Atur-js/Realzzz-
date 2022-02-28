import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../shared/Product";
import Loader from "../shared/Loader";

// redux
import { fetchEyeshadow } from "../../redux/eyeshadow/eyeshadowAction";

// Style
import styles from "./categories.module.css";

const Eyeshadow = () => {
  const dispatch = useDispatch();
  const eyeshadowState = useSelector((state) => state.eyeshadowState);

  useEffect(() => {
    dispatch(fetchEyeshadow());
  }, []);

  return (
    <div className={styles.container}>
      {eyeshadowState.loading ? (
        <Loader />
      ) : eyeshadowState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        eyeshadowState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Eyeshadow;
