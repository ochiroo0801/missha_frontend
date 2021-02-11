import React, { createContext, useState } from "react";

const ShopContext = createContext(ShopProvider);

export function ShopProvider(props) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(Number);
  const [count, setCount] = useState(Number);

  const handleAddToCart = (products) => {
    setProducts((item) => [...item, products]);
    setTotalPrice((item) => item + products.price);
    console.log(products.price);
    console.log(totalPrice);
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
        count,
        setCount,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
