import { Example } from "../exampletypes";

export const hoisting: Example = {
  code: `console.log(a); // undefined (hoisting)
var a = 5;

function scopeDemo() {
    let b = 10; // Block-scoped
    console.log(b);
}
scopeDemo();
`,
  language: "jsx",
  filename: "hoisting.jsx",
  highlightLines: [1,5],
};
