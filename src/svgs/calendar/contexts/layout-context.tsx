import { createContext, useContext } from "react";

export type LayoutContextType = {
  blockSize: readonly [width: number, height: number];
}

const LayoutContext = createContext<LayoutContextType>(null as any);

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export default LayoutContext;
