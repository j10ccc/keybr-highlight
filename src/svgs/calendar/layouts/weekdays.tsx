/** @jsxRuntime automatic */

import TextBlock from "../components/text-block";
import { useLayoutContext } from "../contexts/layout-context";
import { useStyleContext } from "../contexts/style-context";

const WeekDayKey = ["日", "月", "火", "水", "木", "金", "土"];
// const WeekDayKey = ["S", "M", "T", "W", "T", "F", "S"];
// const WeekDayKey = ["日", "一", "二", "三", "四", "五", "六"];

export default function Weekdays() {
  const { blockSize } = useLayoutContext();
  const { weekDaysBg, weekdaysBlockBg } = useStyleContext().color;

  return (
    <g>
      {WeekDayKey.map((key, i) => (
        <TextBlock
          key={key}
          x={i * blockSize[0]}
          y={blockSize[1]}
          text={key}
          rectStyle={{
            fill: weekdaysBlockBg,
            stroke: weekDaysBg
          }}
          textStyle={{
            fontWeight: "bold",
          }}
        />)
      )}
    </g>
  );
}
