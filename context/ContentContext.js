import React, { createContext, useState } from "react";

const ContentContext = createContext(ContentProvider);

export function ContentProvider(props) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (products) => {
    setProducts(products);
  };

  const handleRemoveCart = () => {
    setProducts(null);
  };

  return (
    <ContentContext.Provider
      value={{
        data,
        setData,
        handleAddToCart,
        products,
        handleRemoveCart,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
}

export default ContentContext;
