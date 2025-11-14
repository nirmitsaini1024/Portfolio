import { Example } from "../exampletypes";

export const eventloop: Example = {
  code: `console.log('Start');
setTimeout(() => console.log('Async Call'), 0);
console.log('End');
// Output: Start, End, Async Call
`,
  language: "jsx",
  filename: "event-loop.jsx",
  highlightLines: [],
};
