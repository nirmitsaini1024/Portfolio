import { Example } from "../exampletypes";

export const promises: Example = {
  code: `const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched!'), 1000);
    });
};

fetchData().then(data => console.log(data));
`,
  language: "jsx",
  filename: "promises.jsx",
  highlightLines: [],
};
