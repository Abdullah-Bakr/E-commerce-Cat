import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const [totalQuantity, setTotalQuantity] = useState(
    localStorage.getItem("cartQuantity")
      ? parseInt(localStorage.getItem("cartQuantity"))
      : 0
  );

  const addToCart = (product) => {
    const { id, title, image, price } = product;

    const existingItem = cartItems.find((item) => item.id === id);

    if (!existingItem) {
      setCartItems((prevItems) => [
        ...prevItems,
        { id, title, image, price, quantity: 1 },
      ]);
      setTotalQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      alert("This item is already in your cart!");
    }
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      const itemIndex = currItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const updatedItems = [...currItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
        };
        return updatedItems;
      }
      return currItems;
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            if (item.quantity === 1) {
              return item;
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    setTotalQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    localStorage.setItem("cartQuantity", totalQuantity);
  }, [cartItems, totalQuantity]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  return useContext(CartContext);
};
