import React, { createContext, useState } from "react";

const ContentContext = createContext(ContentProvider);

export function ContentProvider(props) {
  const [data, setData] = useState([]);

  return (
    <ContentContext.Provider value={{ data, setData }}>
      {props.children}
    </ContentContext.Provider>
  );
}

export default ContentContext;
