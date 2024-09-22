/** @jsxRuntime automatic */

import { type SummaryStats } from "@keybr/result";
import { getDaysInMonth } from "date-fns";
import TextBlock from "../components/text-block";
import { useDateContext } from "../contexts/date-context";
import { useLayoutContext } from "../contexts/layout-context";
import { useStyleContext } from "../contexts/style-context";

export default function DayGrid(props: {
  stats: SummaryStats
}) {
  const { stats } = props;
  const { year, month } = useDateContext();
  const { blockSize } = useLayoutContext();
  const { dayGridBg, dayGridBlockBg } = useStyleContext().color;
  const date = new Date(year, month - 1);
  const dayCount = getDaysInMonth(date);
  const firstDayOfWeek = new Date(year, month - 1, 1).getDay(); // Sunday -> 0

  return (
    <g>
      <rect
        x={0}
        y={blockSize[1] * 2}
        width={7 * blockSize[0]}
        height={6 * blockSize[1]}
        fill={dayGridBg}
      />
      {Array(dayCount).fill(0).map((_, i) => (
        <TextBlock
          key={i}
          x={((firstDayOfWeek + i) % 7) * blockSize[0]}
          y={Math.floor((firstDayOfWeek + i) / 7 + 2) * blockSize[1]}
          text={`${i + 1}`}
          rectStyle={{
            fill: dayGridBlockBg,
            stroke: dayGridBg
          }}
        />
      ))}
    </g>
  );
}
