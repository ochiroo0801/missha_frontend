import React, { createContext, useState } from "react";

const ShopContext = createContext(ShopProvider);

export function ShopProvider(props) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(Number);
  const [rating, setRating] = useState(4);
  const [quantity, setQuantity] = useState(Number);

  const QuantityChanger = () => {
    const [quantity, setQuantity] = useState(1);

    return { setQuantity, quantity };
  };

  const handleChange = (event, stateQuantity) => {
    stateQuantity(event);
  };

  const handleAddToCart = (products, quantity) => {
    setProducts((item) => [...item, [products, quantity]]);
  };

  const handleRemoveCart = () => {
    setProducts(null);
  };

  const handleRemoveItem = (id) => {
    const newList = products.filter((item) => item.id !== id);

    setProducts(newList);
  };

  return (
    <ShopContext.Provider
      value={{
        data,
        setData,
        handleAddToCart,
        products,
        handleRemoveCart,
        totalPrice,
        setTotalPrice,
        handleRemoveItem,
        rating,
        setRating,
        quantity,
        setQuantity,
        handleChange,
        QuantityChanger,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
