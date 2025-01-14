import { Example } from "./exampletypes";

export const closures: Example = {
  code: `function outerFunction() {
    let counter = 0;
    return function innerFunction() {
        counter++;
        return counter;
    };
}
const increment = outerFunction();
console.log(increment()); // 1
console.log(increment()); // 2
`,
  language: "jsx",
  filename: "closures.jsx",
  highlightLines: [1, 9, 10],
};
