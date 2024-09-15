/* @jsxRuntime automatic */

import { renderToString } from "react-dom/server";
import HeatMap from "~~/src/svgs/heat-map";

export default defineEventHandler(event => {
  const code = getRouterParam(event, 'code')
  setResponseHeader(event, "Content-Type", "image/svg+xml");

  return renderToString(<HeatMap code={code} />);
})

