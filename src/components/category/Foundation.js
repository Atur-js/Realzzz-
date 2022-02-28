import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../shared/Product";
import Loader from "../shared/Loader";

// redux
import { fetchFoundation } from "../../redux/foundation/foundationAction";

// Style
import styles from "./categories.module.css";

const Foundation = () => {
  const dispatch = useDispatch();
  const foundationState = useSelector((state) => state.foundationState);

  useEffect(() => {
    dispatch(fetchFoundation());
  }, []);

  return (
    <div className={styles.container}>
      {foundationState.loading ? (
        <Loader />
      ) : foundationState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        foundationState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Foundation;
