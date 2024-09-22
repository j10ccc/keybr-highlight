import { createContext, useContext } from "react";

export type DateContextType = {
  year: number;
  month: number;
}

const DateContext = createContext<DateContextType>(null as any);

export function useDateContext() {
  return useContext(DateContext);
}

export default DateContext;
