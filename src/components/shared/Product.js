import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Product.module.css";
import { isInCart, quantityCount } from "../../helper/functions";
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../redux/cart/cartAction";
import trashIcon from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const Price = productData.price == 0.0 ?  "Free!" : `${productData.price}$` ;
  // const PriceNull = productData.price ===  ? "Free!" : `${productData.price}$`;
  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        src={productData.api_featured_image}
        alt="product"
      />
      <h3>{productData.name}</h3>
      <p>{Price}</p>
      <div className={styles.linkContainer}>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(removeItem(productData))}
            >
              <img src={trashIcon} alt="trash" />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(decrease(productData))}
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(increase(productData))}
            >
              +
            </button>
          ) : (
            <button onClick={() => dispatch(addItem(productData))}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product