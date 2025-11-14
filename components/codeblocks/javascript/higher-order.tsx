import { Example } from "../exampletypes";

export const higherorderfn: Example = {
  code: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(doubled, evens, sum);
`,
  language: "jsx",
  filename: "higherorderfn.jsx",
  highlightLines: [],
};
