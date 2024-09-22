/** @jsxRuntime automatic */

import { type SummaryStats } from "@keybr/result";
import { getWeeksInMonth } from "date-fns";
import DateContext from "./contexts/date-context";
import LayoutContext from "./contexts/layout-context";
import StyleContext from "./contexts/style-context";
import DayGrid from "./layouts/day-grid";
import Header from "./layouts/header";
import Weekdays from "./layouts/weekdays";

type PropsType = {
  stats: SummaryStats;
}

export default function Calendar(props: PropsType) {
  const { stats } = props;
  const blockSize = [24, 24] as const;
  const date = new Date();

  return (
    <svg
      width={blockSize[0] * 7}
      height={blockSize[1] * (getWeeksInMonth(date) + 2)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <LayoutContext.Provider value={{ blockSize }}>
        <DateContext.Provider value={{ year: date.getFullYear(), month: date.getMonth() + 1 }}>
          <StyleContext>
            <Header />
            <Weekdays />
            <DayGrid stats={stats} />
          </StyleContext>
        </DateContext.Provider>
      </LayoutContext.Provider>
    </svg>
  );
}
