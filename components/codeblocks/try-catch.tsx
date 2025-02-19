import { Example } from "./exampletypes";

export const trycatch: Example = {
  code: `try {
    throw new Error('Something went wrong!');
} catch (error) {
    console.error(error.message);
}
`,
  language: "jsx",
  filename: "try-catch.jsx",
  highlightLines: [],
};
