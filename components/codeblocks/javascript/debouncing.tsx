import { Example } from "../exampletypes";

export const debouncing: Example = {
  code: `function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
`,
  language: "jsx",
  filename: "debouncing.jsx",
  highlightLines: [1,5],
};
