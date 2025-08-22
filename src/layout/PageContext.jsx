
import { createContext, useContext, useState } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [page, setPage] = useState("activities");
  const value = { page, setPage };
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

export function usePage() {
  const context = useContext(PageContext);
  if (!context) throw Error("Error");
  return context;
}