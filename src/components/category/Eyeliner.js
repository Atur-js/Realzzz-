import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../shared/Product";
import Loader from "../shared/Loader";

// redux
import { fetchEyeliner } from "../../redux/eyeliner/eyelinerAction";

// Style
import styles from "./categories.module.css";

const Eyeliner = () => {
  const dispatch = useDispatch();
  const eyelinerState = useSelector((state) => state.eyelinerState);

  useEffect(() => {
    dispatch(fetchEyeliner());
  }, []);

  return (
    <div className={styles.container}>
      {eyelinerState.loading ? (
        <Loader />
      ) : eyelinerState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        eyelinerState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Eyeliner;
