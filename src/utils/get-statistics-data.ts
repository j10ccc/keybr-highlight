import { ResultSummary } from "@keybr/page-profile/lib/profile/resultsummary";
import { parseFile } from "@keybr/result-io";

export default function getStatisticsData(id: string) {
  return new Promise<ResultSummary>((resolve, reject) => {
    fetch(`https://www.keybr.com/_/sync/data/${id}`)
      .then(response => {
        if (response.headers.get("Content-Type") === "application/octet-stream") {
          return response.arrayBuffer();
        }
        throw new Error("Response is not of type application/octet-stream");
      })
      .then(arrayBuffer => {
        const data = new Uint8Array(arrayBuffer);

        const results = Array.from(parseFile(data));
        resolve(new ResultSummary(results));
      })
      .catch(reject);
  });
}
