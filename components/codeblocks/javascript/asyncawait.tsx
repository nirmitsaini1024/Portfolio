import { Example } from "../exampletypes";

export const async: Example = {
  code: `async function fetchData() {
    const data = await new Promise(resolve => setTimeout(() => resolve('Data fetched!'), 1000));
    console.log(data);
}
fetchData();
`,
  language: "jsx",
  filename: "async/await.jsx",
  highlightLines: [2],
};
