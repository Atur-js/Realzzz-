import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../shared/Product";
import Loader from "../shared/Loader";

// redux
import { fetchBlush } from "../../redux/blush/blushAction";

// Style
import styles from "./categories.module.css";

const Blush = () => {
  const dispatch = useDispatch();
  const blushState = useSelector((state) => state.blushState);

  useEffect(() => {
    dispatch(fetchBlush());
  }, []);

  return (
    <div className={styles.container}>
      {blushState.loading ? (
        <Loader />
      ) : blushState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        blushState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Blush;
