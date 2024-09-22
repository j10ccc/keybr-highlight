/** @jsxRuntime automatic */

import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export type StyleContextType = {
  color: {
    weekdaysBlockBg: string;
    dayGridBlockBg: string;
    headerBg: string;
    dayGridBg: string;
    weekDaysBg: string;
  };
  font: {
    size: number;
    family: string;
  }
}

const defaultStyle: StyleContextType = {
  color: {
    weekdaysBlockBg: "#dcd3d3",
    dayGridBlockBg: "#eae4e4",
    headerBg: "#f3f0f0",
    dayGridBg: "#f3f0f0",
    weekDaysBg: "#f3f0f0"
  },
  font: {
    size: 12,
    family: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";"
  }
};

const StyleContextImpl = createContext<StyleContextType>(null as any);

function StyleContext(props: {
  value?: Partial<StyleContextType>;
  children: ReactNode;
}) {
  const { value, children } = props;
  const style = { ...defaultStyle };

  for (const key in value) {
    style[key] = { ...defaultStyle[key], ...value[key] };
  }

  return (
    <StyleContextImpl.Provider value={style}>
      { children }
    </StyleContextImpl.Provider>
  );
}

export function useStyleContext() {
  return useContext(StyleContextImpl);
}

export default StyleContext;
