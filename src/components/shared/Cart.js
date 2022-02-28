import React from "react";
import { useDispatch } from "react-redux";


// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Style
import styles from "./Cart.module.css";

import { removeItem, decrease, increase } from "../../redux/cart/cartAction";

const Cart = (props) => {
  const dispatch = useDispatch();
  const { api_featured_image, name, price, quantity } = props.data;

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={api_featured_image} alt="cartImage" />
      <div className={styles.data}>
        <h3>{name}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch(decrease(props.data))}>-</button>
        ) : (
          <button onClick={() => dispatch(removeItem(props.data))}>
            <img src={trashIcon} alt="trash" />
          </button>
        )}
        <button onClick={() => dispatch(increase(props.data))}>+</button>
      </div>
    </div>
  );
};

export default Cart;
