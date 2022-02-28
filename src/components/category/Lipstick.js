import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../shared/Product";
import Loader from "../shared/Loader";

// redux
import { fetchLipstick } from "../../redux/lipstick/lipstickAction";

// Style
import styles from "./categories.module.css";

const Lipstick = () => {
  const dispatch = useDispatch();
  const lipstickState = useSelector((state) => state.lipstickState);

  useEffect(() => {
    dispatch(fetchLipstick());
  }, []);

  return (
    <div className={styles.container}>
      {lipstickState.loading ? (
        <Loader />
      ) : lipstickState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        lipstickState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Lipstick;
