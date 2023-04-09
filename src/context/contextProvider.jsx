import React, { createContext, useState } from "react";

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [search, setsearch] = useState("");
  // const [click, setclick] = useState(false)

  return (
    <MyContext.Provider value={([search, setsearch])}>
      {children}
    </MyContext.Provider>
  );
}
