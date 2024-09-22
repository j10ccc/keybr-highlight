/* @jsxRuntime automatic */

import { renderToString } from "react-dom/server";
import Calendar from "~~/src/svgs/calendar";
// import getStatisticsData from "~~/src/utils/get-statistics-data";

export default defineEventHandler(async event => {
  // const id = getRouterParam(event, "id");

  const summary: any = { allTimeStats: {} };
  // const summary = await getStatisticsDaa(code);
  // console.log(summary.allTimeStats.results.slice(-1)[0].timeStamp)

  setResponseHeader(event, "Content-Type", "image/svg+xml");
  return renderToString(<Calendar stats={summary.allTimeStats.stats} />);
});
