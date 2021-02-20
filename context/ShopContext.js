import React, { createContext, useState, useEffect } from "react";

const ShopContext = createContext(ShopProvider);

export function ShopProvider(props) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(Number);
  const [rating, setRating] = useState(4);

  const handleTotalPrice = (event) => {
    setTotalPrice((item) => item + event);

    // const price = event.map((e) => e);

    // const totalReduce = price.reduce(myFunction);
    // function myFunction(total, value) {
    //   return total + value;
    // }
    // setTotalPrice(totalReduce);
  };

  const handleAddToCart = (products) => {
    setProducts((item) => [...item, products]);
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
        handleTotalPrice,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
