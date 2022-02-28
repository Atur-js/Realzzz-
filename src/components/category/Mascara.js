import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../shared/Product";
import Loader from "../shared/Loader";

// redux
import { fetchMascara } from "../../redux/mascara/mascaraAction";

// Style
import styles from "./categories.module.css";

const Mascara = () => {
  const dispatch = useDispatch();
  const mascaraState = useSelector((state) => state.mascaraState);

  useEffect(() => {
    dispatch(fetchMascara());
  }, []);

  return (
    <div className={styles.container}>
      {mascaraState.loading ? (
        <Loader />
      ) : mascaraState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        mascaraState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Mascara;
