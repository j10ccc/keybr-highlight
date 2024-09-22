/** @jsxRuntime automatic */

import type React from "react";
import { useContext } from "react";
import LayoutContext from "../contexts/layout-context";
import { useStyleContext } from "../contexts/style-context";

type TextBlockPropsType = {
  x: number;
  y: number;
  text: string;
  rectStyle?: Partial<React.SVGAttributes<SVGRectElement>["style"]>;
  textStyle?: Partial<React.SVGAttributes<SVGTextElement>["style"]>;
}

export default function TextBlock(props: TextBlockPropsType) {
  const { x, y, text, rectStyle, textStyle } = props;
  const layout = useContext(LayoutContext).blockSize;
  const style = useStyleContext();
  const { font } = style;
  const [width, height] = layout;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          stroke: "#f3f0f0",
          strokeWidth: "2",
          ...rectStyle
        }}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily={font.family}
        fontSize={font.size}
        style={{
          ...textStyle
        }}
      >
        {text}
      </text>
    </g>
  );
}
