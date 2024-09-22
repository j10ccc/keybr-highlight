/** @jsxRuntime automatic */

import { useLayoutContext } from "../contexts/layout-context";
import { useStyleContext } from "../contexts/style-context";

export default function Header() {
  const { blockSize } = useLayoutContext();
  const bg = useStyleContext().color.headerBg;
  const [width, height] = [blockSize[0] * 7, blockSize[1]];
  const date = new Date();

  return (
    <g>
      <rect width={width} height={height} fill={bg} />
      <text
        x={width / 2}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={14}
      >
        {date.getFullYear()}/{date.getMonth() + 1}
      </text>
    </g>
  );
}
