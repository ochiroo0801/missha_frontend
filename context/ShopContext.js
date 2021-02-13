import React, { createContext, useState } from "react";

const ShopContext = createContext(ShopProvider);

export function ShopProvider(props) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(Number);

  const handleAddToCart = (products) => {
    setProducts((item) => [...item, products]);
    setTotalPrice((item) => item + products.price);
  };

  const handleRemoveCart = () => {
    setProducts(null);
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
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
