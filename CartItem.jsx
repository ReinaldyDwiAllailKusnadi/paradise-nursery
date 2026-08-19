import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some plants from Paradise Nursery.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>
                    Price: ${Number(item.price).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </div>

                  <p>
                    Subtotal: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>
              Total: ${totalCost.toFixed(2)}
            </h2>

            <button type="button">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
